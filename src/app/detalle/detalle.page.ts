import { Component, OnInit } from '@angular/core';
import { NavController, NavParams  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostProviderService } from '../providers/post-provider.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  reserva:any;

  constructor(private route: ActivatedRoute,
    private postPvdr: PostProviderService) { }

  ngOnInit() {
    this.reserva = this.postPvdr.getRes();
  }
}
