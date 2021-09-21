import { SecondComponent } from '../pages/second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondModule } from '../pages/second/second.module';
import { ThirdComponent } from '../pages/third/third.component';
import { ThirdModule } from '../pages/third/third.module';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent,
    data: {
      shouldReuse: true,
      key: 'third'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    ThirdModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThirdRoutingModule { }
