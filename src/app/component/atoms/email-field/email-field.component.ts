import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-field',
  template: `<div> 
    <label>Email:</label> 
    <input type="text" [(ngModel)]="email"> 
  </div> 
    <div> 
      <label>Password:</label> <input type="password" [(ngModel)]="password"> 
    </div>`,

  styleUrls: [
  ]
})
export class EmailFieldComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor() { }

  ngOnInit(): void {
  }

}
