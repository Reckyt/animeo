import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListAnimeoComponent } from './list-animeo/list-animeo.component';
import { AnimeoCardDirective } from './animeo-card.directive';

const animeoRoutes: Routes = [
    { path: 'animeos', component: ListAnimeoComponent },
];

@NgModule({
    declarations: [ListAnimeoComponent, AnimeoCardDirective],
    imports: [CommonModule, RouterModule.forChild(animeoRoutes)],
})
export class AnimeoModule {}
