import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../../Shared/shared.module';
import { CategoryFashionComponent } from './category-fashion/category-fashion.component';
import { TranslatingModule } from '../../Shared/translating/translating.module';
import { SupTotalComponent } from '../home/sup-total/sup-total.component';


@NgModule({
  declarations: [
  
    CategoryFashionComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    TranslatingModule,

  ]
})
export class CategoryModule { }
