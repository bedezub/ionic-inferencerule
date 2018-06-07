import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ConclusionPage } from '../conclusion/conclusion';

@Component({
  selector: 'page-statement-two',
  templateUrl: 'statement-two.html',
})
export class StatementTwoPage {

  p: any;
  q: any;
  r='';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.p = this.navParams.get('p');
    this.q = this.navParams.get('q');
  }

  send() {
    if(this.r === '') {
      let toast = this.toastCtrl.create({
        message: 'Please insert input',
        duration: 3000,
      });
      toast.present();
    } else {
      this.navCtrl.push(ConclusionPage, {p: this.p, q: this.q, r: this.r});
    }
  }


}
