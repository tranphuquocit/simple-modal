import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-rolling-turn',
  templateUrl: './add-rolling-turn.component.html',
  styleUrls: ['./add-rolling-turn.component.scss'],
})
export class AddRollingTurnComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    const element = <HTMLElement>document.getElementsByClassName('modal-shadow')[0];
    if (element) {
      element.style.top = '100%';
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
