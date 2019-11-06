import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Listarreservas1Page } from './listarreservas1.page';

const routes: Routes = [
  {
    path: '',
    component: Listarreservas1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Listarreservas1Page]
})
export class Listarreservas1PageModule {}
