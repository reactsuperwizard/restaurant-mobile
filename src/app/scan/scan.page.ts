import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  result:any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.scanQR();
  }


  

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.result=barcodeData.text;
      // success. barcodeData is the data returned by scanner
    }).catch(err => {
      // error
    });
  }




}
