import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private URL = 'http://localhost:3030'
  constructor(private http: HttpClient) { }

  onLogin(username, password) {
    var login = this.http.post(`${URL}/login`, { username: username, password: password});
    return login;  
  }

  getTodoList(username) {
    return this.http.post(`${URL}/getTodo`, { username: username });
  }
}
