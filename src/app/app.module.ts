import { ButtonComponent } from './component/button/button.component';
import { HeaderComponent } from './header/header.component';
import { AnimeoComponent } from './animeo/animeo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent, 
        AnimeoComponent,
        HeaderComponent,
        ButtonComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
