import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviderService } from '../providers/post-provider.service';
import { async } from 'q';
import * as moment from 'moment';

@Component({
  selector: 'app-registrarreserva',
  templateUrl: './registrarreserva.page.html',
  styleUrls: ['./registrarreserva.page.scss'],
})
export class RegistrarreservaPage implements OnInit {
//getdatasalas
  res_id: number;
  res_num:string;
  res_hora_ini:string;
  res_hora_fin:string;
  res_id_sal:string;
  res_fecha:string;
  res_id_prof:number;
  timestampp:string;
  sala: string;
  nombres: any[];
  per: any[];
  salas:any[];
  constructor(private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProviderService) {
      this.per = this.postPvdr.getDestn();
      this.nombres = [];
      this.salas=[];
      let body = {
        aksi: 'getdatasalas',
        limit : 0,
        start : 10,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let customer of data.result) {
          this.nombres.push(customer.sal_nombre);
          this.salas.push(customer);
        }
      });
     }


  ngOnInit() {

  }

  async addRegister() {
    console.log(this.res_id);
    if (this.res_fecha == '') {
      const toast = await this.toastController.create({
      message: 'fecha is required',
      duration: 2000
      });
      toast.present();
    } else if (this.res_id_sal == '') {
      const toast = await this.toastController.create({
        message: 'sala is required',
        duration: 2000
        });
      toast.present();
    } else if (this.res_num == '') {
      const toast = await this.toastController.create({
        message: 'num is required',
        duration: 2000
        });
      toast.present();

    } else if (this.res_id == null) {
      const toast = await this.toastController.create({
        message: 'ID is required',
        duration: 2000
        });
      toast.present();

    } else {
      let body = {
        res_id: this.res_id,
        res_num: this.res_num,
        res_hora_ini: this.res_hora_ini,
        res_hora_fin: this.res_hora_fin,
        res_id_sal: this.res_id_sal,
        res_fecha: this.res_fecha,
        timestampp: this.timestampp,
        aksi: 'add_registerreservas'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/home']);
         const toast = await this.toastController.create({
          message: 'Register successfully',
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

  async addRegisterr(){
    var hora = this.res_hora_ini.split('T');
    var hora1 = hora[1].split('.');
    var ini = hora1[0];
    hora = this.res_hora_fin.split('T');
    hora1 = hora[1].split('.');
    var fi = hora1[0];
    var fe = this.res_fecha.split('T');
    var h1 = ini.split(":");
    var h2 = fi.split(":");
    console.log('h1[0] = ' + h1[0]+ " h2[0] = "+h2[0]);
    var si = 0;
    for(let customer of this.salas){
      if(customer.sal_nombre == this.sala){
        si = customer.sal_id;
      }
    }
    if (this.res_fecha == '') {
      const toast = await this.toastController.create({
      message: 'fecha is required',
      duration: 2000
      });
      toast.present();
    } else if (this.res_id_sal == '') {
      const toast = await this.toastController.create({
        message: 'sala is required',
        duration: 2000
        });
      toast.present();
    } else if (this.res_num == '') {
      const toast = await this.toastController.create({
        message: 'num is required',
        duration: 2000
        });
      toast.present();

    }else if (Number(h1[0])>Number(h2[0]) || Number(h1[0])==Number(h2[0])) {
      const toast = await this.toastController.create({
        message: 'the start time must be greater than the end time',
        duration: 2000
        });
      toast.present();

    } else {
      let body = {
        res_num: this.res_num,
        res_hora_ini: ini,
        res_hora_fin: fi,
        res_id_sal: si,
        res_fecha: fe[0].toString(),
        res_id_prof: Number(this.per[4]),
        timestampp: this.timestampp,
        aksi: 'add_registerreservas'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/not']);
         const toast = await this.toastController.create({
          message: 'Register successfully',
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
}
