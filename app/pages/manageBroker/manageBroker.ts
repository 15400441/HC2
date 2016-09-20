import { Component , ViewChild, OnInit} from '@angular/core';
import { NavController, MenuController,Nav } from 'ionic-angular';
import {ManageUserPage} from '../manageUser/manageUser';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/manageBroker/manageBroker.html'
})
export class ManageBrokerPage {

  public tab1Root: any;
  public tab2Root: any;
 

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Tab1;
    this.tab2Root = Tab2;
    
  }
}


@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  <ion-list>


  <ion-list-header>
    All Brokers
  </ion-list-header>
  <ion-item *ngFor="let broker of brokers"> {{broker.name}} </ion-item>
  
</ion-list>

  </ion-content>`
})
export class Tab1 {
    brokers: any;
    constructor(public http:Http) {
    this.getBrokers();
 
  }

  getBrokers()
  {
  	   console.log("here");
       this.http.get('http://192.168.1.130:3000/api/brokers ' ).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.brokers = data;
    });
  }
	

}


@Component({
  template: ` 
  <ion-header>
    <ion-navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content class="addtrans">
    <ion-list inset>
        <form #f='ngForm' (ngSubmit)="onSubmit(f)">
            <ion-item>
                <ion-label floating>Name</ion-label>
                <ion-input type="text" name="name" ngModel></ion-input>
            </ion-item>
            <ion-item>
                <ion-label floating>Email</ion-label>
                <ion-input type="text" name="email" ngModel></ion-input>
            </ion-item>
            <button block>
                <ion-icon name="add"></ion-icon>Add</button>
        </form>
    </ion-list>
</ion-content>`
})
export class Tab2 {
  name:any;
  email:any;

  constructor()
  {
  	this.name='';
  	this.email='';
  }

  onSubmit(f:NgForm) {
    // let's log our findings
    console.log('Form submission is ', f.value);
  }

}