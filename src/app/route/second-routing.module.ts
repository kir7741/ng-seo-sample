import { SecondComponent } from './../pages/second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondModule } from '../pages/second/second.module';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    data: {
      shouldReuse: true,
      key: 'second'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    SecondModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecondRoutingModule { }
