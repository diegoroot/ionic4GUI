import { Component, OnInit } from '@angular/core';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  	qrData = null;
	createdCode = null;
	scanedCode= null;
  constructor(private barcodescanner: BarcodeScanner ) { }

  createCode(){
this.createdCode = this.qrData;
  }
  scanCode(){
this.barcodescanner.scan().then(barcodeData =>{this.scanedCode = barcodeData.text;})
  }

  ngOnInit() {
  }

}
