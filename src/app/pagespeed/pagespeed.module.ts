import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagespeedRoutingModule } from './pagespeed-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PagespeedRoutingModule
  ]
})
export class PagespeedModule { }
