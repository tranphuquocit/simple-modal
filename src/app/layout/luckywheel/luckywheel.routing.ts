import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LuckyWheelComponentPage } from './layout';

const routes: Routes = [
  {
    path: '', component: LuckyWheelComponentPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuckyWheelRoutingModule {}