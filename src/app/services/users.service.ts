import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = `${environment.api_url}`;
  constructor(private http: HttpClient) { }

  getUsers(){
    const url = `${this.api}/users`;
    return this.http.get(url);
  }
}
