import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let total = 0;
    this.items.forEach((item) => (total += item.price));
    return total;
  }
  
}
