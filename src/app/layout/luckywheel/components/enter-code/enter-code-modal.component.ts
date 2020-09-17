import { Component, Input, OnInit } from '@angular/core';
import { LuckyWheelService } from '../../services';

@Component({
  selector: 'app-enter-code-modal',
  templateUrl: './enter-code-modal.component.html',
  styleUrls: ['./enter-code-modal.component.scss'],
})
export class EnterCodeModalComponent implements OnInit {
  @Input() campaignId;
  @Input() phone;
  code: string;
  hasErr;

  constructor(
    private luckywheelService: LuckyWheelService,
  ) { }


  ngOnInit() {
    const element = <HTMLElement>document.getElementsByClassName('modal-shadow')[0];
    if (element) {
      element.style.top = '100%';
    }
  }

  inputchange() {
  }

  submit() {

    console.log('code', this.code);
    
    if (!this.code) {
      this.hasErr = true;
      return;
    }

    this.hasErr = false;
    let body = {
      campaign_id: this.campaignId,
      phone: this.phone,
      code: this.code
    }
    this.luckywheelService.enterCodeGetTurn(body).subscribe(res => {
      console.log(res);
    })
  }

}
