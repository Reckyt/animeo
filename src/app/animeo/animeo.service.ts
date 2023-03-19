import { Injectable } from '@angular/core';

import { Animeo } from './animeo';
import { ANIMEOS } from './mock-animeo-list';

@Injectable({
    providedIn: 'root',
})
export class AnimeoService {
    getAnimeoList(): Animeo[] {
        return ANIMEOS;
    }

    constructor() {}
}
