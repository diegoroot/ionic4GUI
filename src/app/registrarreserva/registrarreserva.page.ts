import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProviderService } from '../providers/post-provider.service';
import { async } from 'q';

@Component({
  selector: 'app-registrarreserva',
  templateUrl: './registrarreserva.page.html',
  styleUrls: ['./registrarreserva.page.scss'],
})
export class RegistrarreservaPage implements OnInit {

  res_id: number;
  res_num:string;
  res_hora_ini:string;
  res_hora_fin:string;
  res_id_sal:string;
  res_fecha:string;
  timestampp:string;

  constructor(private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProviderService) { }

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
}
