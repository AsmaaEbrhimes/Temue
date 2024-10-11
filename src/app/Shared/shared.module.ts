import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { FooterComponent } from './footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { SupscrptionComponent } from './supscrption/supscrption.component';
import { TranslatingModule } from './translating/translating.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SupscrptionComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    SharedRoutingModule,
    DialogModule,
    InputTextModule,
    BadgeModule,
    AccordionModule,
    TranslatingModule
  ],
  exports: [
    HeaderComponent,
    SupscrptionComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
