import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarprofesorPage } from './registrarprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarprofesorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarprofesorPage]
})
export class RegistrarprofesorPageModule {}
