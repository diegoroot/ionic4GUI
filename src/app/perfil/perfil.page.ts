import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PostProviderService} from '../providers/post-provider.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  person: any;
  user: any;
  userReady: boolean = false;
  constructor(private dataService: PostProviderService,
              private route: ActivatedRoute,
              private router: Router) {
    this.person = this.dataService.getDestn();
    this.user = {
      name: this.person[3]+'',
      email: this.person[1]+'',
      picture: this.person[2]
    }
    if(this.person[2] == 'null'){
      this.user.picture = '../../assets/Uceva.jpg';
    }
    console.log(this.user.email);
    this.person = this.user;
  }

  ngOnInit() {
    
  }

}
