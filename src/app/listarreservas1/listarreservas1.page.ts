import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviderService } from '../providers/post-provider.service';
import { async } from 'q';
import { DetallePageModule} from '../detalle/detalle.module';

@Component({
  selector: 'app-listarreservas1',
  templateUrl: './listarreservas1.page.html',
  styleUrls: ['./listarreservas1.page.scss'],
})
export class Listarreservas1Page implements OnInit {

  reservas: any = [];
  limit: number = 10;
  start: number = 0;
  id: number=0;
  person: any;
  user: any;
  usuarios: any[] = [];
  textoBuscar = '';

  constructor(private router: Router,
    private postPvdr: PostProviderService,
    public toastController: ToastController,
    public detalle: DetallePageModule) { 
      this.person = this.postPvdr.getDestn();
      this.id = Number(this.person[4]);
    }

  ngOnInit() {
  }

  buscarUsuario( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
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
        aksi: 'getmisdatareservas',
        limit : this.limit,
        start : this.start,
        id: this.id
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

  delCustomer(customer: any){
    let body = {
      aksi: 'deletereserva',
      res_id: customer.res_id
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
      var alertpesan = data.msg;
      if (data.success) {
        this.router.navigate(['/home']);
        const toast = await this.toastController.create({
         message: 'Update successfully',
         duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toastController.create({
          message: alertpesan,
          duration: 2000
        });
      }
    });
  }

}
