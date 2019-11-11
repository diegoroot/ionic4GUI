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
  

  googleLogin(){
    if(!this.platform.is('cordova')){
      this.webGoogleLogin();
     }
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '369948839335-6rl89n9csfj5eqtf8h89tvjjtavcu4d9.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      const provider =  firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken);
      const credential = await this.afAuth.auth.signInWithCredential(provider);
      var alert = await this.alertController.create({
        header: 'Alert',
        subHeader: '',
        message: credential.user.email,
        buttons: ['OK']
      });
      alert.present();
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise <void>{
    try{
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      var ter = credential.user.email.split("@",2);
      console.log(credential.user.photoURL);
      if(ter[1]==="uceva.edu.co"){
        this.si();
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
        this.person.push('google');
        this.person.push(credential.user.email+'');
        this.person.push(credential.user.photoURL+'');
        this.person.push(credential.user.displayName+'');
        this.postPvdr.setDestn(this.person);
        this.router.navigate(['/not']);
      }else{
        //this.presentAlert();
        this.singOut();
      }
      console.log(ter);
    }catch(err){
      console.log(err);
    }
    
   }

   async doGoogleLogin(){
    this.gplus.login({
      'webClientId': '369948839335-6rl89n9csfj5eqtf8h89tvjjtavcu4d9.apps.googleusercontent.com',
      'offline': true
    }).then((obj) => {
        if (!firebase.auth().currentUser) {
            firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
            .then((success) => {
                this.displayAlert(JSON.stringify(success),"signInWithCredential successful");
                var ter = success.user.email.split("@",2);
                console.log(success.user.photoURL);
                if(ter[1]==="uceva.edu.co"){
                  this.si();
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
                  this.postPvdr.setDestn(this.person);
                  this.router.navigate(['/not']);
                }else{
                  this.singOut1();
                  this.presentAlert("Debes ingresar con un correo institucional");
                }
                      })
            .catch((gplusErr) => {
                this.displayAlert(JSON.stringify(gplusErr),"GooglePlus failed")
            });
        }
    }).catch( (msg) => {
      this.displayAlert(msg,"Gplus signin failed2")
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

  singOut(){
    this.afAuth.auth.signOut();
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

  si(){
    //lleva a inicio
    //this.router.navigate(["/not"]);
  }

  formRegister(){
    this.router.navigate(["/registrarprofesor"]);
  }

}
