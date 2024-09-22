import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post('https://backfood2-1traner.onrender.com/login', model)
  }

}
