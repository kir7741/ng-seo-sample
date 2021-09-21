import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FirstModule { }
