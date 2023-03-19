import { Component, OnInit } from '@angular/core';

import { ANIMEOS } from './../mock-animeo-list';
import { Animeo } from '../animeo';
// import { AnimeoService } from './../animeo.service';

@Component({
    selector: 'app-list-animeo',
    templateUrl: './list-animeo.component.html',
    styleUrls: ['./list-animeo.component.css']
})
export class ListAnimeoComponent implements OnInit {
    animeoList: Animeo[] = ANIMEOS;

    // constructor(private animeoService: AnimeoService) {}

    ngOnInit() {
        // this.animeoList = this.animeoService.getAnimeoList();
        console.log('🔥 ~ this.animeoList:', this.animeoList);
    }
}
