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

const firebaseConfig = {
  apiKey: "AIzaSyAAxPEi-X-JFIsYajzk0gzLdDND-SMspTg",
  authDomain: "decent-era-254723.firebaseapp.com",
  databaseURL: "https://decent-era-254723.firebaseio.com",
  projectId: "decent-era-254723",
  storageBucket: "decent-era-254723.appspot.com",
  messagingSenderId: "78586309499",
  appId: "1:78586309499:web:adaa6693778e9c84666bde",
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
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Network,
    PostProviderService,
    DetallePageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  proseslogout(){
    console.log('logout');
  }
}
