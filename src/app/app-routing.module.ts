import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMortageComponent } from './create-mortage/create-mortage.component';

const routes: Routes = [
  {
    path: '', component: CreateMortageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
