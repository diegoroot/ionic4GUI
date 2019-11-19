import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
 import { IonSlides } from '@ionic/angular';
 import { ViewChild } from '@angular/core';

=======
// login-misreservas
>>>>>>> 5ebc06ce4c4e32af08da4f699a301a20975b6d10
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
<<<<<<< HEAD
  ImageArray:any[];

switcher: IonSlides;


=======
  mostrar =1;
  nombre = "";
  foto = "";
>>>>>>> 5ebc06ce4c4e32af08da4f699a301a20975b6d10
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
<<<<<<< HEAD
    },
     {
      title: 'Mapa',
      url: '/mapa',
      icon: 'map'
    },
  
=======
    }
>>>>>>> 5ebc06ce4c4e32af08da4f699a301a20975b6d10
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

