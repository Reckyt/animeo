import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListAnimeoComponent } from './list-animeo/list-animeo.component';

const animeoRoutes: Routes = [
    { path: 'animeos', component: ListAnimeoComponent },
];

@NgModule({
    declarations: [ListAnimeoComponent],
    imports: [CommonModule, RouterModule.forChild(animeoRoutes)],
})
export class AnimeoModule {}
