import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
