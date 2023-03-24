import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string = ' Vous êtes déconnecté.';
  email: string;
  password: string;
  auth: AuthService;

  constructor( 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn){
      this.message= 'Vous êtes connecté.'
    } else {
      this.message= 'Identifiant ou mot de passe incorrect.'
    }
  }

  login() {
    this.message = "Tentative de connexion en cours ..."
    this.auth.login(this.email, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      console.log('🏞🎆🏂 ~ LoginComponent ~ isLoggedIn => ', isLoggedIn);
      if(isLoggedIn){
        this.router.navigate(['animeos']);
      }else{
        this.password = '';
        this.router.navigate(['login']);
      }
    })
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté.'
  }

}
