import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CustomRoundIconComponent } from './custom-round-icon.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CustomRoundIconComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  exports: [
    CustomRoundIconComponent
  ]
})
export class GeneralModule {
}
