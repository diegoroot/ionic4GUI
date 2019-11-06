import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviderService } from '../providers/post-provider.service';
import { async } from 'q';
import { DetallePageModule} from '../detalle/detalle.module';

@Component({
  selector: 'app-listarreservass',
  templateUrl: './listarreservass.page.html',
  styleUrls: ['./listarreservass.page.scss'],
})
export class ListarreservassPage implements OnInit {

  reservas: any = [];
  limit: number = 10;
  start: number = 0;

  constructor(private router: Router,
    private postPvdr: PostProviderService,
    public toastController: ToastController,
    public detalle: DetallePageModule) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.reservas = [];
    this.start = 0;
    this.loadCustomer();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadCustomer().then(() => {
    event.target.complete();
    });
    }, 500);
  }

  loadCustomer() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdatareservas',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let customer of data.result) {
          this.reservas.push(customer);
        }
        resolve(true);
      });
    });
  }

  info(customer: any){
    this.postPvdr.setRes(customer);
    this.router.navigate(['/detalle']);
  }

}
