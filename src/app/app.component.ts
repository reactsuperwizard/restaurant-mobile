import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },{
    title: 'QR Scan',
    url: '/scan',
    icon: 'qr-scanner'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    } ,
    {
      title: 'About',
      url: '/aboutus',
      icon: 'at'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl:MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async closeMenu(){
    console.log("closingmenu");
      this.menuCtrl.close();
  }

}
