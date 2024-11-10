import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFashionComponent } from './category-fashion/category-fashion.component';

const routes: Routes = [
  {path:'Fashion' , component:CategoryFashionComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
