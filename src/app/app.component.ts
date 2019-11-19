import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 import { IonSlides } from '@ionic/angular';
 import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  ImageArray:any[];

switcher: IonSlides;


  public appPages = [
    {
      title: 'Noticias',
      url: '/not',
      icon: 'grid'
    },
    {
      title: 'Reservas',
      url: '/listarreservas',
      icon: 'list'
    },
     {
      title: 'Mapa',
      url: '/mapa',
      icon: 'map'
    },
  
  ];
 slideOptions = {
       initialSlide: 1,
    speed: 500,
    loop:true,
    
  };
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.initializeApp();
    this.ImageArray = [{'image' : '../assets/icon/1.jpg'},
    {'image' : '../assets/icon/2.jpg'},
    {'image' : '../assets/icon/3.jpg'},
    {'image' : '../assets/icon/4.jpg'},
    {'image' : '../assets/icon/5.jpg'}];
  }


slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  
 


}

