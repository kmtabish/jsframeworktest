import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`./assets/colorData.json`)
    .map((res:Response) => res.json()  );
  }

}