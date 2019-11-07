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

  constructor(public pos: PostProviderService,
    private router: Router,
    public ap: AppComponent) { 
    this.pos.setDestn("");
    this.router.navigate(['/home']);
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
      }
    ];

  }

  ngOnInit() {
  }
}
