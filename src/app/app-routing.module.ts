import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'registrarprofesor', loadChildren: './registrarprofesor/registrarprofesor.module#RegistrarprofesorPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'not', loadChildren: './not/not.module#NotPageModule' },
  { path: 'listarreservas', loadChildren: './listarreservas/listarreservas.module#ListarreservasPageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
  { path: 'registrarreserva', loadChildren: './registrarreserva/registrarreserva.module#RegistrarreservaPageModule' },
  { path: 'listarreservas1', loadChildren: './listarreservas1/listarreservas1.module#Listarreservas1PageModule' },
  { path: 'listarreservass', loadChildren: './listarreservass/listarreservass.module#ListarreservassPageModule' },
  { path: 'scanner', loadChildren: './scanner/scanner.module#ScannerPageModule' },
  { path: 'logoutt', loadChildren: './logoutt/logoutt.module#LogouttPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
