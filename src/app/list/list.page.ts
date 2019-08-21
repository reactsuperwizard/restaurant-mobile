import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ pic: string; title: string; reviews: string; note: string; subtitle: string  }> = [];

  constructor(private nav: NavController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        pic: '/assets/featuredimage.png',
        title: 'Burger and Lobster',
        reviews:'$$$$$ (3 Reviews)',
        note: '1301 Avenue,Brooklyn, NY 11230',
        subtitle: 'https://burgerandlobster.com'
      });
    }
  }

  ngOnInit() {
this.hideCamera();
  }
  selectItem(item){
    this.nav.navigateForward('/details');
  }
  private hideCamera() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
}
}
