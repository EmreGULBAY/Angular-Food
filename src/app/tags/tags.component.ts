import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  justifyContent: string = 'center';

  @Input()
  foodPageTags?: String[];

  tags?: Tag[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
