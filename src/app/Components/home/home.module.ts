import { TranslatingModule } from '../../Shared/translating/translating.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../Shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DtailsProductComponent } from './dtails-product/dtails-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    DtailsProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DialogModule,
    ButtonModule, 
    InputTextModule,
    AnimateOnScrollModule,
    GalleriaModule,
    CheckboxModule,
    RadioButtonModule,
    TranslatingModule,

  ]
})
export class HomeModule { }
