import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home',component: HeaderComponent ,canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
