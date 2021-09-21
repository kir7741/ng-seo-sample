import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ThirdModule { }
