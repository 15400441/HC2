
import {Http , Headers,Response,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BrokerService {

  constructor(public http:Http){

  }
  
  getBrokers():any
  {
       console.log("here");
       return this.http.get('http://192.168.1.130:3000/api/brokers' ).map(res => res.json()).subscribe(data => {
        console.log(data);
        return data;
    });
  }


  getBroker(id):any
  {
     console.log("here");
     var data={"id":"1","name":"b","phone":"123","email":"e"}
     return  Promise.resolve(data);

      /* return this.http.get('http://192.168.1.130:3000/api/broker?id='+id).map(res => res.json()).subscribe(data => {
        
        return  Promise.resolve(data);
    });  */
    
  }

}





