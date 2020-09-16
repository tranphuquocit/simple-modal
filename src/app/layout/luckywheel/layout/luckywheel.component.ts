import { Component } from "@angular/core";
import { STEP_LANDING_PAGE } from 'src/app/public/constant/constant';

@Component({
  selector: 'app-luckywheel',
  templateUrl: 'luckywheel.component.html',
  styleUrls: ['luckywheel.component.scss'],

})
export class LuckyWheelComponentPage {
  index = 0;
  step = STEP_LANDING_PAGE;
  constructor() {
    console.log(this.step[this.index].button.length > 1);
  }
  
  next(index) {
    if (index !== 2) {
      this.index = index + 1;
    }
    if (index === 2) {
      alert('Dừng step nhảy vào Game')
    }
  }
  prev(index) {
    if(index !== 0) {
      this.index = index - 1;
    }
  }
}