import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-not',
  templateUrl: './not.page.html',
  styleUrls: ['./not.page.scss'],
})
export class NotPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openBlank() {
    this.iab.create(`https://uceva.edu.co`, `_blank`);
  }

}
