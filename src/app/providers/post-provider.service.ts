import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostProviderService {

    server: string = 'http://localhost/ionic4login/server_api/';
    public objeto: any;
    public res:any;
    public ext: any;
    constructor(public http: Http) {

    }

    postData(body, file){
        let type = 'application/json; charset=utf-8';
        let headers = new Headers({ 'Content-Type': type });
        let options = new RequestOptions({ headers: headers });
        console.log(this.server + file, JSON.stringify(body), options);
        return this.http.post(this.server + file, JSON.stringify(body), options)
        .pipe(map(res => res.json()));
    }

    public setDestn(objeto) {
        this.objeto = objeto;
      }
    
      getDestn() {
        return this.objeto;
      }

      public setRes(objeto) {
        this.res = objeto;
      }
    
      getRes() {
        return this.res;
      }

      getExt(){
        return this.ext;
      }

    public setExt(ext){
      this.ext = ext;
    }
}
