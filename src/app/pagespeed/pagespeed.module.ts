import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagespeedRoutingModule } from './pagespeed-routing.module';
import { IndexComponent } from './index/index.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PagespeedRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagespeedModule { }
