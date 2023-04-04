import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-email',
  template: `
   <form> 
    <app-email-field [email]="email" [password]="password" ></app-email-field>
    </form>`,
  styleUrls: [
  ]
})
export class InputEmailComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor() { }

  ngOnInit(): void {
  }

}
