import { Component } from "@angular/core";

@Component({
  selector: 'app-luckywheel',
  templateUrl: 'luckywheel.component.html',
  styleUrls: ['luckywheel.component.scss'],

})
export class LuckyWheelComponentPage {
  index = 0;
  constructor() {
    console.log(this.step[this.index].button.length > 1);
  }
  step = [
    {
      image: '../../../../assets/images/luckywheel/step1/group_2804.png',
      image2x: '../../../../assets/images/luckywheel/step1/group_2804@2x.png',
      image3x: '../../../../assets/images/luckywheel/step1/group_2804@3x.png',
      title: 'Quét QR code, nhận cơ hội tốt',
      note: 'Bạn ơi! Quét QR code trên sản phẩm để tham gia minigame có thưởng nhé!',
      button: [
        {
          title: 'Tiếp tục',
          acctive: true
        }
      ]
    },
    {
      image: '../../../../assets/images/luckywheel/step2/group_2803.png',
      image2x: '../../../../assets/images/luckywheel/step2/group_2803@2x.png',
      image3x: '../../../../assets/images/luckywheel/step2/group_2803@3x.png',
      title: 'Chơi game hay, quà liền tay',
      note: 'Nhanh tay thử vận may với vòng quay may mắn nào bạn ơi!',
      button: [
        {
          title: 'Tiếp tục',
          acctive: true
        },
        {
          title: 'Quay lại',
          acctive: true
        }
      ]
    },
    {
      image: '../../../../assets/images/luckywheel/step3/group_2802.png',
      image2x: '../../../../assets/images/luckywheel/step3/group_2802@2x.png',
      image3x: '../../../../assets/images/luckywheel/step3/group_2802@3x.png',
      title: 'Wow! Trúng thưởng rồi!',
      note: 'Thật tuyệt vời, bạn đã nhận được phần quà từ nhà tài trọ rồi đấy!',
      button: [
        {
          title: 'Tôi đã hiểu',
          acctive: true
        },
        {
          title: 'Quay lại',
          acctive: true
        }
      ]
    }
  ]
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