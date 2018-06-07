import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { InferencePage } from '../inference/inference';

@Component({
  selector: 'page-conclusion',
  templateUrl: 'conclusion.html',
})
export class ConclusionPage {

  p: any;
  q: any;
  r: any;
  s='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.p = this.navParams.get('p');
    this.q = this.navParams.get('q');
    this.r = this.navParams.get('r');
  }

  send() {
    if(this.s === '') {
      let toast = this.toastCtrl.create({
        message: 'Please insert input',
        duration: 3000,
      });
      toast.present();
    } else {
      this.navCtrl.push(InferencePage, {p: this.p, q: this.q, r: this.r, s: this.s});
    }
  }

}
