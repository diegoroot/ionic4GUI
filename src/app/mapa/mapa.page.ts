import { Component, OnInit } from '@angular/core';
import {  AfterContentInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit {
map;
lat;
lng;
dis: any;
dis2: any;
  @ViewChild('mapElement', {static: true}) mapElement;
  constructor(private geolocation: Geolocation) { }


  ngOnInit() {
  }
  ngAfterContentInit(): void {
    

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
        {
          center: {lat: this.lat, lng: this.lng},
          zoom:8
        });
    
    
   this.geolocation.getCurrentPosition().then((resp) => {
     var pos_1 = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
  var pos_2 = new google.maps.LatLng(4.0690246,-76.1876254);
  var pos_3 = new google.maps.LatLng(4.0690244,-76.2007577);

  console.log('obteniendo con Google :'+google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2)/1000 +''+ 'kms');
  this.dis = google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2)/1000;
    this.dis2 = google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3)/1000;
    this.map.setCenter({lat:resp.coords.latitude, lng:resp.coords.longitude});
    this.map.setZoom(17);

    var marker = new google.maps.Marker({
    position:  {lat:resp.coords.latitude, lng:resp.coords.longitude},
    map: this.map,
    title: 'Ubicación actual',
   

  });
  
 // resp.coords.longitude
});


    var mark = new google.maps.Marker({

    position:  {  lat: 4.062925, 
            lng:  -76.199249},
    map: this.map,
    title: 'Sala A - Salon A201',
     
  });

    const contentstring=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/uceva/slideshow/Banner_Ing_Sistemas_acredita.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada en el segundo piso del bloque A :"+"<br>"+"<br>"+ "Área 116 m2" +"<br>"+"<br>"+ "51 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow = new google.maps.InfoWindow({
     content: contentstring,
     maxwidth:600
   });

   mark.addListener('click',function(){
     infowindow.open(this.map,mark);
   });




   var marke = new google.maps.Marker({

    position:  {  lat: 4.062893, 
            lng:   -76.199140},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring2=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/Sala-B_1.JPG" />'
    + '<ion-card-content>'+
      "Está ubicada en el primer piso del bloque A junto a la cafetería de contaduría, cuenta con:"+"<br>"+"<br>"+ "Área 55 m2" +"<br>"+"<br>"+ "24 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow2 = new google.maps.InfoWindow({
     content: contentstring2,
     maxwidth:600
   });

   marke.addListener('click',function(){
     infowindow2.open(this.map,marke);
   });



var markee = new google.maps.Marker({

    position:  {  lat: 4.062941, 
            lng:   -76.200118},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring3=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/uceva/slideshow/Banner_Ing_Sistemas_acredita.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada en el segundo piso del bloque C, cuenta con:"+"<br>"+"<br>"+ "Área 66 m2" +"<br>"+"<br>"+ "19 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow3 = new google.maps.InfoWindow({
     content: contentstring3,
     maxwidth:600
   });

   markee.addListener('click',function(){
     infowindow3.open(this.map,markee);
   });



var markeee = new google.maps.Marker({

    position:  {  lat: 4.064018, 
            lng:   -76.199718},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring4=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/uceva/slideshow/Banner_Ing_Sistemas_acredita.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada en el primer piso del bloque D, frente al parqueadero central, cuenta con:"+"<br>"+"<br>"+ "Área 42 m2" +"<br>"+"<br>"+ "11 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow4 = new google.maps.InfoWindow({
     content: contentstring4,
     maxwidth:600
   });

   markeee.addListener('click',function(){
     infowindow4.open(this.map,markeee);
   });




var markeeee = new google.maps.Marker({

    position:  {  lat: 4.064339, 
            lng:   -76.200678},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring5=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/Sala-E-new.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada en el primer piso del bloque E, junto a la Vicerrectoría de Investigaciones, cuenta con:"+"<br>"+"<br>"+ "Área 78 m2" +"<br>"+"<br>"+ "26 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow5 = new google.maps.InfoWindow({
     content: contentstring5,
     maxwidth:600
   });

   markeeee.addListener('click',function(){
     infowindow5.open(this.map,markeeee);
   });



var markeeeee = new google.maps.Marker({

    position:  {  lat: 4.065515, 
            lng:   -76.202589},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring6=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/Sala-F-2.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada en el segundo piso del bloque F, junto a la oficina de la Facultad de Ciencias de la Salud, cuenta con:"+"<br>"+"<br>"+ "Área 51 m2" +"<br>"+"<br>"+ "17 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow6 = new google.maps.InfoWindow({
     content: contentstring6,
     maxwidth:600
   });

   markeeeee.addListener('click',function(){
     infowindow6.open(this.map,markeeeee);
   });



   var markeeeeee = new google.maps.Marker({

    position:  {  lat: 4.066104, 
            lng:   -76.204079},
    map: this.map,
    title: 'Sala B - Salon A103',
     
  });

    const contentstring7=" <ion-card>"+'<img src="http://www.uceva.edu.co/images/Sala-G-new.jpg" />'
    + '<ion-card-content>'+
      "Está ubicada a un costado del coliseo Carlos María Lozano, cuenta con:"+"<br>"+"<br>"+ "Área 50 m2" +"<br>"+"<br>"+ "12 Equipos de computo para asistentes"+"<br>"+"<br>"+ "1 Equipo de computo para el docente" +"<br>"+"<br>"+"Video Beam"+"<br>"+"<br>"+ "Aire acondicionado"+
        '</ion-card-content>'+"</ion-card>";
   const infowindow7 = new google.maps.InfoWindow({
     content: contentstring7,
     maxwidth:600
   });

   markeeeeee.addListener('click',function(){
     infowindow7.open(this.map,markeeeeee);
   });
    
  }






}
