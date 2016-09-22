import { Component , ViewChild, OnInit,Input} from '@angular/core';
import { NavController, MenuController,Nav,NavParams,Platform} from 'ionic-angular';
import {ManageUserPage} from '../manageUser/manageUser';
import {BrokerDetailPage} from '../manageBroker/brokerDetail';
import {Http , Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/manageBroker/manageBroker.html'
})
export class ManageBrokerPage {
  manageBroker:string='allBrokers'
  name:any;
  email:any;
  brokers: any; //store all brokers get from server
  isAndroid: boolean = false;
  searchBrokers:any;

  constructor( public http:Http , public navCtrl: NavController, navParams: NavParams,platform: Platform) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.name='';
    this.email='';
    this.getBrokers();
    this.isAndroid = platform.is('android');
    
  }

  //initialize all brokers and searchBrokers
  getBrokers()
  {
       console.log("here");
       this.http.get('http://192.168.1.130:3000/api/brokers' ).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.brokers = data;
        this.searchBrokers=this.brokers;
    });
  }

  searchBroker(e)
  {
    //reset searchBrokers to all brokers
    this.searchBrokers=this.brokers;
    var val=e.target.value;
    if(val && val.trim()!=''){
      this.searchBrokers=this.searchBrokers.filter((broker)=>{
        return(broker.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  
    console.log(this.searchBrokers);
  }

  getDetail(broker)
  {

    console.log("go");
    this.navCtrl.push(BrokerDetailPage,{"id":broker.id});
    
  }


  onSubmit(f:NgForm) {
    // let's log our findings
    let body=JSON.stringify(f.value);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://192.168.1.130:3000/api/broker/add",body ,options).subscribe( data => {
        console.log(data);
      
    });;
    
  }
}





