import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  testresult:string;
  constructor(private qrScanner: QRScanner) {

  }

  scanQR(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       this.qrScanner.show();
       this.showCamera();
       // camera permission was granted
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.testresult=text;
         this.qrScanner.hide(); // hide camera preview
         this.hideCamera();
         scanSub.unsubscribe(); // stop scanning
       });
     } else if (status.denied) {
       this.qrScanner.openSettings();
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }

  showCamera(){
(window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera(){
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
