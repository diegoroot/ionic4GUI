import { Component, OnInit } from '@angular/core';
import { PostProviderService} from '../providers/post-provider.service';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-logoutt',
  templateUrl: './logoutt.page.html',
  styleUrls: ['./logoutt.page.scss'],
})
export class LogouttPage implements OnInit {
  per:any[];
  constructor(public pos: PostProviderService,
    private router: Router,
    public ap: AppComponent) {      
    this.pos.setDestn("");
    this.pos.setExt('');
    this.ap.mostrar =1;
    this.ap.nombre="";
    this.ap.foto = "";
    this.ap.appPages = [
      {
        title: 'Noticias',
        url: '/not',
        icon: 'ios-paper'
      },
      {
        title: 'Reservas',
        url: '/listarreservas',
        icon: 'list'
      },
      {
       title: 'Mapa',
       url: '/mapa',
       icon: 'map'
     }
    ];
    this.router.navigate(['/home']);

  }

  ngOnInit() {
  }
}
