import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'card/:name', component: CardComponent },
  { path: '', redirectTo: '/card/jeweled-lotus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

