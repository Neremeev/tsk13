import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getAllServices() {
    return this.http.get('https://tsk13.ru/api/services');
  }

  getSertificate() {
    return this.http.get('https://tsk13.ru/api/pictures-certificate');
  }

  getWorks() {
    return this.http.get('https://tsk13.ru/api/pictures-work');
  }

  postMessage(obj) {
    return this.http.post('https://tsk13.ru/api/message', obj);
  }

  postRequest(obj) {
    return this.http.post('https://tsk13.ru/api/request', obj);
  }

}
