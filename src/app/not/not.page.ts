import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not',
  templateUrl: './not.page.html',
  styleUrls: ['./not.page.scss'],
})
export class NotPage implements OnInit {
ImageArray: any[];
  constructor() { this.ImageArray = [{'image' : '../../assets/icon/1.jpg'},
    {'image' : '../../assets/icon/2.jpg'},
    {'image' : '../../assets/icon/3.jpg'},
    {'image' : '../../assets/icon/4.jpg'},
    {'image' : '../../assets/icon/5.jpg'}];}

  ngOnInit() {
  }
  slideOptions = {
       initialSlide: 0,
    speed: 500,
    loop:true,
    autoplay:true,
    
  };

}
