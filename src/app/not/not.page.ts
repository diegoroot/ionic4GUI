import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-not',
  templateUrl: './not.page.html',
  styleUrls: ['./not.page.scss'],
})
export class NotPage implements OnInit {
<<<<<<< HEAD
ImageArray: any[];
  constructor() { this.ImageArray = [{'image' : '../../assets/icon/1.jpg'},
    {'image' : '../../assets/icon/2.jpg'},
    {'image' : '../../assets/icon/3.jpg'},
    {'image' : '../../assets/icon/4.jpg'},
    {'image' : '../../assets/icon/5.jpg'}];}
=======

  constructor(private iab: InAppBrowser) { }
>>>>>>> 5ebc06ce4c4e32af08da4f699a301a20975b6d10

  ngOnInit() {
  }
  slideOptions = {
       initialSlide: 0,
    speed: 500,
    loop:true,
    autoplay:true,
    
  };

  openBlank() {
    this.iab.create(`https://uceva.edu.co`, `_blank`);
  }

}
