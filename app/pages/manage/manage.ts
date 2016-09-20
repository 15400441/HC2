import { Component , ViewChild} from '@angular/core';
import { NavController, MenuController,Nav } from 'ionic-angular';
import {ManageBrokerPage} from '../manageBroker/manageBroker'
import {ManageUserPage} from '../manageUser/manageUser'

@Component({
  templateUrl: 'build/pages/manage/manage.html'
})
export class ManagePage {
   @ViewChild(Nav) nav: Nav;
   pages: Array<{title: string, component: any}>;
   rootPage: any = ManageBrokerPage;
  constructor(
     public menu: MenuController)
     {
       
       this.pages = [
      { title: 'Manage Broker', component: ManageBrokerPage },
      { title: 'Manage User', component: ManageUserPage }
    ];

    }
  

 openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}



