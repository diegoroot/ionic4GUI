import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GooglePlus}from '@ionic-native/google-plus/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {Platform} from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { PostProviderService } from './providers/post-provider.service';
import { NavController} from '@ionic/angular';
import { DetallePageModule} from './detalle/detalle.module';
import { LogouttPageModule } from './logoutt/logoutt.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyCiL1VWUvy6VmCHd1OvE0B3hlKcs5Sii1c",
  authDomain: "decent-era-254723.firebaseapp.com",
  databaseURL: "https://reservas-adf4d.firebaseio.com",
  projectId: "reservas-adf4d",
  storageBucket: "reservas-adf4d.appspot.com",
  messagingSenderId: "78586309499",
  appId: "1:369948839335:android:6fa00d52dc62418fe07a82",
  measurementId: "G-HV33K1L96F"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule,
    NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    NativeStorage,
    Network,
    PostProviderService,
    DetallePageModule,
    LogouttPageModule,
     BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  proseslogout(){
    console.log('logout');
  }
}
