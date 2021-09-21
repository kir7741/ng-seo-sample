import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SecondModule { }
