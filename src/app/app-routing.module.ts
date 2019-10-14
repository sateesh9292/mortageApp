import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMortageComponent } from './create-mortage/create-mortage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'createAccount', component: CreateMortageComponent
  },
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
