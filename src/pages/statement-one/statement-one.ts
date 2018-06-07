import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StatementTwoPage } from '../statement-two/statement-two';

@Component({
  selector: 'page-statement-one',
  templateUrl: 'statement-one.html',
})
export class StatementOnePage {

  p: any;
  q='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.p = this.navParams.get('p');
  }

  send() {
    if(this.q === '') {
      let toast = this.toastCtrl.create({
        message: 'Please insert input',
        duration: 3000,
      });
      toast.present();
    } else {
      this.navCtrl.push(StatementTwoPage, {p: this.p, q: this.q});
    }
  }

  ionViewDidLoad() {
  }

}
