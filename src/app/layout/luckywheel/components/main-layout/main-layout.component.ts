import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LuckyWheelService } from '../../services';
import { AddRollingTurnComponent } from '../add-rolling-turn';
import { EnterCodeModalComponent } from '../enter-code';

@Component({
  selector: 'luckywheel-main',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss'],
})
export class LuckyWheelMainLayoutComponent implements OnInit {
  constructor(
    public modalController: ModalController,
    private luckyWheelService: LuckyWheelService) {}
  imageAsset: string = '../../assets/images/luckywheel/step5/';
  srcMainBackground: string = ''; // Set hinh mac dinh
  srcHeaderBackground: string = ''; // Set hinh mac dinh
  campaignId: number = 0;
  time_play: number = 0;
  phone: string = '';
  ngOnInit() {
    this.luckyWheelService.getCampaign({ target: '53yvrmo32e', phone: null })
    .subscribe((res: any) => {
      this.srcMainBackground = res.background_rotation.small;
      this.srcHeaderBackground = res.header_image_rotation.small;
      if (res.id) {
        this.campaignId = res.id
        let obj = {
          campaign_id: res.id,
          phone: null
        }
        this.luckyWheelService.getTurnCount(obj).subscribe(res => {
          if (res && res.data) {
            this.time_play = res.data.play
          }
        })
      }
    })
  }

  async showModalAdd() {
    const modal = await this.modalController.create({
      component: AddRollingTurnComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: EnterCodeModalComponent,
      cssClass: 'custom-class',
      componentProps: {
        'campaignId': this.campaignId,
        'phone': this.phone
      }
    });
    return await modal.present();
  }
}