import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimeoComponent } from "./list-animeo.component";

const animeoRoutes: Routes = [
  { path: '', component: ListAnimeoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(animeoRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}