import { Component , ViewChild, OnInit} from '@angular/core';
import { NavController, MenuController,Nav ,NavParams} from 'ionic-angular';
import {ManageUserPage} from '../manageUser/manageUser';
import {Http , Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import  {BrokerService} from '../service';


@Component({
  templateUrl: 'build/pages/manageBroker/brokerDetail.html'
})
export class BrokerDetailPage implements OnInit {

  
  broker: any;
  

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http, public brokerService: BrokerService) {
    
    //initialize attribute
    this.broker={id:"",name:"ini",email:"",phone:""}
   
  }

  ngOnInit()
  { 
    var id=this.navParams.get("id");
    //this.broker=this.brokerService.getBroker(id);
     
  }


  goBack() {
    this.navCtrl.pop();
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


