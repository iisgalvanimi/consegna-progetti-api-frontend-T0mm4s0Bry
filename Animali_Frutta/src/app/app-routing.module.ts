import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { FruttaComponent } from './frutta/frutta.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'generic/:id', component: GenericComponent },
  {path: '', redirectTo: '/animali', pathMatch: 'full'},
  {path: 'Animali', component: AnimaliComponent},
  {path: 'Frutta', component: FruttaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
