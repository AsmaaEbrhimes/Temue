import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtailsProductComponent } from './dtails-product/dtails-product.component';
import { HomeComponent } from './home/home.component';
import { SupTotalComponent } from './sup-total/sup-total.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  { path: 'detailsproducr/:id', component: DtailsProductComponent },
  { path: 'suptotal', component: SupTotalComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
