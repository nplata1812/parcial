import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCafeComponent } from './list-cafe/list-cafe.component';



@NgModule({
  declarations: [
    ListCafeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListCafeComponent]
})
export class CafeModule { }
