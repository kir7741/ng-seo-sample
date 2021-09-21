

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstComponent } from '../pages/first/first.component';
import { FirstModule } from '../pages/first/first.module';


const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    FirstModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FirstRoutingModule { }
