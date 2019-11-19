import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { LoadingController, AlertController } from '@ionic/angular';
import { AppComponent} from '../app.component';
import { ToastController } from '@ionic/angular';
import { PostProviderService } from '../providers/post-provider.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;
  person: string[];
  user:any;
  id: number;
  entro: boolean;
  constructor(private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProviderService,
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    public ap: AppComponent,
    public platform: Platform,
    public gplus: GooglePlus) {
      this.person = [];
      this.entro =false;
      this.postPvdr.setDestn("");
      this.postPvdr.setExt("");
      this.id = 0;
      this.singOut1();
    }

  async proseslogin(){
    if (this.username != '' && this.password != '') {
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
        this.ap.appPages = [
          {
            title: 'Reservas',
            url: '/listarreservass',
            icon: 'list'
          },
          {
            title: 'Scanner QR',
            url: '/scanner',
            icon: 'search'
          },
          {
            title: 'Mis reservas',
            url: '/listarreservas1',
            icon: 'list'
          },
          {
            title: 'Crear reserva',
            url: '/registrarreserva',
            icon: 'add'
          },
          {
            title: 'Perfil',
            url: '/perfil',
            icon: 'person'
          },
          {
            title: 'Cerrar sesión',
            url: '/logoutt',
            icon: 'power'
          }
        ];
        var tr = data.result;
        this.person = [];
        this.person.push('login');
        this.person.push(tr.correo+'');
        this.person.push('null');
        this.person.push(tr.nombre+'');
        this.ap.nombre = tr.nombre+"";
        this.ap.foto = '../../assets/Uceva.jpg';
        this.ap.mostrar = 0;
        this.person.push(tr.id+'');
        console.log(this.person);
        this.postPvdr.setDestn(this.person);
        this.router.navigate(['/not']);
         const toast = await this.toastController.create({
          message: 'Welcome!',
          duration: 2000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
         toast.present();
       }
     });

    } else {
      const toast = await this.toastController.create({
        message: 'Username or password invalid',
        duration: 2000
      });
      toast.present();
    }

    this.username = '';
    this.password = '';

  }

  existir(correo:string, user:any){
    let body = {
      email: correo,
      aksi: 'correo'
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
     var alertpesan = data.msg;
     if (data.success) {
      var tr = data.result;
      this.id = Number(tr.id);
      this.postPvdr.setExt(tr.id);
     } else {
       let body = {
        nombre_prof: user.displayName+'',
        apellidos_prof: '',
        codigo_prof: '',
        password_prof: '123',
        correo_prof: user.email+'',
        telefono_prof: user.phoneNumber+'',
        id_usu_prof: 2,
        id_mat_prof: 1,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {});
     let body1 = {
      email: correo,
      aksi: 'correo'
    };
    this.postPvdr.postData(body1, 'file_aksi.php').subscribe(async data => {
      var alertpesan = data.msg;
      if (data.success) {
       var tr = data.result;
       this.id = Number(tr.id);
       this.postPvdr.setExt(tr.id);
       this.postPvdr.setExt(tr.id);
      }
   });
  }
});
}

   async doGoogleLogin(){
    this.gplus.login({
      'webClientId': '369948839335-6rl89n9csfj5eqtf8h89tvjjtavcu4d9.apps.googleusercontent.com',
      'offline': true
    }).then((obj) => {
        if (!firebase.auth().currentUser) {
            firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
            .then((success) => {
                //this.displayAlert(JSON.stringify(success),"signInWithCredential successful");
                var ter = success.user.email.split("@",2);
                if(ter[1]==="uceva.edu.co"){
                  this.existir(success.user.email,success.user);
                  this.ap.appPages = [
                    {
                      title: 'Reservas',
                      url: '/listarreservass',
                      icon: 'list'
                    },
                    {
                      title: 'Scanner QR',
                      url: '/scanner',
                      icon: 'search'
                    },
                    {
                      title: 'Mis reservas',
                      url: '/listarreservas1',
                      icon: 'list'
                    },
                    {
                      title: 'Crear reserva',
                      url: '/registrarreserva',
                      icon: 'add'
                    },
                    {
                      title: 'Perfil',
                      url: '/perfil',
                      icon: 'person'
                    },
                    {
                      title: 'Cerrar sesión',
                      url: '/logoutt',
                      icon: 'power'
                    }
                  ];
                  //nombre-cod-correo-contraseña
                  this.person = [];
                  this.person.push('google');
                  this.person.push(success.user.email+'');
                  this.person.push(success.user.photoURL+'');
                  this.person.push(success.user.displayName+'');
                  this.ap.nombre = success.user.displayName;
                  this.ap.foto = success.user.photoURL;
                  this.ap.mostrar = 0;
                  this.person.push(this.postPvdr.getExt()+'');
                  this.postPvdr.setDestn(this.person);
                  this.router.navigate(['/not']);
                }else{
                  this.singOut1();
                  this.presentAlert("Debes ingresar con un correo institucional");
                }
                      })
            .catch((gplusErr) => {
                //this.displayAlert(JSON.stringify(gplusErr),"GooglePlus failed")
            });
        }
    }).catch( (msg) => {
      //this.displayAlert(msg,"Gplus signin failed2")
    });
    if(this.person[0] === "google"){
      this.router.navigate(['/not']);
    }

  }

  async displayAlert(value,title){
    var alert;
    alert = await this.alertController.create({
      header: title,
      subHeader: '',
      message: JSON.stringify(value),
      buttons: ['OK']
    });

  await alert.present();
    }

  async presentLoading(loading) {
    return await loading.present();
  }

   async presentAlert(name:string) {
    var alert;
      alert = await this.alertController.create({
        header: 'Alert',
        subHeader: '',
        message: name,
        buttons: ['OK']
      });

    await alert.present();
  }

  singOut1(){
    this.gplus.logout().then(
      (msg) => {
            if(firebase.auth().currentUser){
              firebase.auth().signOut();
            }
      }).catch(
      (msg) => {
      });
      this.postPvdr.setDestn("");
      this.person = null;
  }

}
