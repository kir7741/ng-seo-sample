import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseStrategy } from './strategy/reuse-router/reuse-strategy';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // { provide: RouteReuseStrategy, useClass: ReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
