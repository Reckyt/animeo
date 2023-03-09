import { Component, OnInit } from '@angular/core';
import { Animeo } from '../animeo';

@Component({
  selector: 'app-list-animeo',
  templateUrl: './list-animeo.component.html',
  styles: [
  ]
})
export class ListAnimeoComponent implements OnInit {
  animeoList: Animeo[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
