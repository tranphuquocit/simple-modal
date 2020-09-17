import { Component } from "@angular/core";
import { STEP_LANDING_PAGE } from 'src/app/public/constant/constant';

@Component({
  selector: 'app-luckywheel',
  templateUrl: 'luckywheel.component.html',
  styleUrls: ['luckywheel.component.scss'],

})
export class LuckyWheelComponentPage {
  index = 0;
  imageAsset: string = '../../../../assets/images/luckywheel/step4/';
  step = STEP_LANDING_PAGE;
  isLoadGame: boolean = false;
  randomWidth = 0;
  loadGame = {
    background: 'background.png',
    logo: 'ic_logo_icheck.png',
    title: 'name.png',
    wheel: 'wheel.png'
  }
  constructor() {
  }
  
  next(index) {
    if (index !== 2) {
      this.index = index + 1;
    }
    if (index === 2) {
      this.isLoadGame = true;
      for(var i = 1; i <= 10; i++) {
        this.doSetTimeout(i);
      }
    }
  }
  doSetTimeout(i) {
    setTimeout(() => {
      this.randomWidth = i*10;
    }, i*1000);
  }
  prev(index) {
    if(index !== 0) {
      this.index = index - 1;
    }
  }
}