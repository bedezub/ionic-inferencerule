import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StatementOnePage } from '../statement-one/statement-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  p='';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  send() {
    if(this.p === '') {
      let toast = this.toastCtrl.create({
        message: 'Please insert input',
        duration: 3000,
      });
      toast.present();
    } else {
      this.navCtrl.push(StatementOnePage, {p: this.p});
    }
  }

}
