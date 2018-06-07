import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-inference2',
  templateUrl: 'inference2.html',
})
export class Inference2Page {

  result: string;
  prove: string;
  p: any;
  q: any;
  r: any;
  s: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.p = this.navParams.get('p');
    this.q = this.navParams.get('q');
    this.r = this.navParams.get('r');
    this.s = this.navParams.get('s');
  }

  send() {
    if(this.r != this.s) {
      this.result = 'This result is invalid';
      this.prove = 'r &#8800; s';
      this.navCtrl.push(ResultPage, {result: this.result, prove: this.prove});
    } else {
      this.result = 'This result is valid';
      this.prove = 'r = s';
      this.navCtrl.push(ResultPage, {result: this.result, prove: this.prove});
    }
  }

  ionViewDidLoad() {
  }

}
