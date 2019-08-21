import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  result:any;
  constructor(private qrScanner: QRScanner) { }

  ngOnInit() {
    this.scanQR();
  }

  scanQR(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
      this.showCamera();
      this.qrScanner.show();
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.result=text;
         this.hideCamera();
         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });
     } else if (status.denied) {
      this.hideCamera(); 
      this.qrScanner.openSettings();

     } else {
      this.hideCamera();
       console.log("permission was denied");
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => {
    this.hideCamera();
    console.log('Error is', e);});
  }


  private showCamera() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
}
private hideCamera() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
}

}
