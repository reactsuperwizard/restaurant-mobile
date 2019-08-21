import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  testresult:string;
  constructor(private nav:NavController) {

  }

  scanQR(){
    this.nav.navigateForward('/scan');
  }




}
