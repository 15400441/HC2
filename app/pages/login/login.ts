import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

constructor(public navCtrl: NavController, navParams: NavParams) {
   
  }

  login(event) {
    this.navCtrl.push(TabsPage);
  }
}
