import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListAnimeoComponent } from './list-animeo/list-animeo.component';
import { AnimeoCardDirective } from './animeo-card.directive';
import { AnimeoComponent } from './animeo.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../component/button/button.component';

const animeoRoutes: Routes = [
    { path: 'animeos', component: ListAnimeoComponent },
];

@NgModule({
    declarations: [ HeaderComponent, ButtonComponent, ListAnimeoComponent, AnimeoCardDirective, AnimeoComponent],
    imports: [CommonModule, RouterModule.forChild(animeoRoutes)],
})
export class AnimeoModule {}
