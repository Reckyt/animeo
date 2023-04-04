import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-field',
  templateUrl: 'label-field.component.html',
  styleUrls: [
  ]
})
export class LabelFieldComponent implements OnInit {
  @Input() labelValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
