import { AnimeoComponent } from './animeo/animeo.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { NoAuthGuard } from './noauth.guard';
import { ListAnimeoComponent } from './animeo/list-animeo/list-animeo.component';

const routes: Routes = [
    { 
      path: '', 
      redirectTo: 'animeos',
      pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard],
    },
    {
        path: 'animeos',
        component: AnimeoComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: '',
                component: ListAnimeoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
