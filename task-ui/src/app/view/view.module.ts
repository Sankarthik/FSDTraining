import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ViewComponent],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
