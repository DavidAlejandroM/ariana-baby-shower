import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: InitialComponent, }
  ,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
