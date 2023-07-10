import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Food } from 'src/app/shared/models/food';
import { CartItem } from 'src/app/shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food) {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number) {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);

    if (!cartItem) return;
    else cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
