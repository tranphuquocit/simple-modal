import { NgModule } from "@angular/core";
import { LuckyWheelComponentPage } from './layout';
import { LuckyWheelRoutingModule } from './luckywheel.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, LuckyWheelRoutingModule],
  declarations: [LuckyWheelComponentPage]
})
export class LuckyWheelModule {}