import { NgModule } from "@angular/core";
import { LuckyWheelComponentPage } from './layout';
import { LuckyWheelRoutingModule } from './luckywheel.routing';
import { CommonModule } from '@angular/common';
import { EnterCodeModalComponent, LuckyWheelMainLayoutComponent } from './components';
import { LuckyWheelService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const COMPONENT = [LuckyWheelMainLayoutComponent, EnterCodeModalComponent];
const SERVICE = [LuckyWheelService]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LuckyWheelRoutingModule,
    HttpClientModule],
  declarations: [LuckyWheelComponentPage, ...COMPONENT],
  providers: [...SERVICE]
})
export class LuckyWheelModule {}