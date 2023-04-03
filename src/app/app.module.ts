import { ButtonComponent } from './component/atoms/button/button.component';
import { HeaderComponent } from './component/organisms/header/header.component';
import { AnimeoComponent } from './animeo/animeo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './component/molecules/nav-bar/nav-bar.component';
import { LogoComponent } from './component/atoms/logo/logo.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent, 
        AnimeoComponent,
        HeaderComponent,
        ButtonComponent,
        NavBarComponent,
        LogoComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
