import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
