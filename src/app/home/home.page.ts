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
    this.showCamera();
    this.nav.navigateForward('/scan');
  }


  private showCamera() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
}
private hideCamera() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
}

}
