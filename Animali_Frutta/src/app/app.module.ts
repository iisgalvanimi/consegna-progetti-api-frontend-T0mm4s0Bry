import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaliComponent } from './animali/animali.component';
import { FruttaComponent } from './frutta/frutta.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    FruttaComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
