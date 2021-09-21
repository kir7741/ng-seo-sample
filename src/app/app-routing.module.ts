import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first'
      },
      {
        path: 'first',
        loadChildren: () => import('./route/first-routing.module').then(m => m.FirstRoutingModule),
      },
      {
        path: 'second',
        loadChildren: () => import('./route/second-routing.module').then(m => m.SecondRoutingModule)
      },
      {
        path: 'third',
        loadChildren: () => import('./route/third-routing.module').then(m => m.ThirdRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    DashboardModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
