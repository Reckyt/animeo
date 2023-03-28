import { Component, OnInit } from '@angular/core';

import { Animeo } from '../animeo';
import { AnimeoService } from './../animeo.service';

@Component({
    selector: 'app-list-animeo',
    templateUrl: './list-animeo.component.html',
    styleUrls: ['./list-animeo.component.css']
})
export class ListAnimeoComponent implements OnInit {
    animeoList: Animeo[];

    constructor(private animeoService: AnimeoService) {}

    ngOnInit() {
        this.animeoList = this.animeoService.getAnimeoList();
    }

    test(card: any) {
        console.log('🔥 ~ card:', card);
        card.animeoList.el.nativeElement.style.height = `600px`;
    }
}
