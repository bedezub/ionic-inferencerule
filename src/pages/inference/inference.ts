import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { Inference2Page } from '../inference2/inference2';

@Component({
  selector: 'page-inference',
  templateUrl: 'inference.html',
})
export class InferencePage {

  result: string;
  prove: string;
  p: any;
  q: any;
  r: any;
  s: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.p = this.navParams.get('p');
    this.q = this.navParams.get('q');
    this.r = this.navParams.get('r');
    this.s = this.navParams.get('s');
  }

  send() {
    if(this.r != this.s) {
      this.result = 'This result is invalid';
      this.prove = 'r &#8800; s';
      this.navCtrl.push(Inference2Page, {p: this.p, q: this.q, r: this.r, s: this.s});
    } else {
      this.result = 'This result is valid';
      this.prove = 'r = s';
      this.navCtrl.push(Inference2Page, {p: this.p, q: this.q, r: this.r, s: this.s});
    }
  }

}
