import { ButtonComponent } from './component/atoms/button/button.component';
import { HeaderComponent } from './component/organisms/header/header.component';
import { AnimeoComponent } from './animeo/animeo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Atoms
import { LogoComponent } from './component/atoms/logo/logo.component';
import { EmailFieldComponent } from './component/atoms/email-field/email-field.component';
// Molecules
import { LabelFieldComponent } from './component/atoms/label-field/label-field.component';
import { NavBarComponent } from './component/molecules/nav-bar/nav-bar.component';
import { InputEmailComponent } from './component/molecules/input-email/input-email.component';
//Organisms
import { LoginComponent } from './component/organisms/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent, 
        AnimeoComponent,
        HeaderComponent,
        ButtonComponent,
        NavBarComponent,
        LogoComponent,
       EmailFieldComponent,
       LabelFieldComponent,
       InputEmailComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
