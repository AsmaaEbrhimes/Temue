import { Component } from '@angular/core';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-category-fashion',
  templateUrl: './category-fashion.component.html',
  styleUrl: './category-fashion.component.css'
})
export class CategoryFashionComponent {
  filterFashionCategory:any[]=[]


  constructor(private servicesHome:HomeService){ 
    this.GetCategoryFashion()
  }


  GetCategoryFashion(){
this.servicesHome.GetAllproduct('product/All').subscribe({
  next:(res:any)=>{
    this.filterFashionCategory = res.filter((ele:any)=>ele.category == 'Fashion')
    console.log(this.filterFashionCategory)
  }
})
  }

}
