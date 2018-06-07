import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  p: string;
  r: string;
  s: string;
  q: string;
  result: any;
  prove: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.result = this.navParams.get('result');
    this.prove = this.navParams.get('prove');
  }

  send() {
    this.p = '';
    this.r = '';
    this.s = '';
    this.q = '';

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
