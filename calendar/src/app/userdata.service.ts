import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private URL = {
    MYURL: 'http://localhost:3030',
    SPOTURL: 'https://api.spotify.com/v1',
  }
  constructor(private http: HttpClient) { }

  onLogin(username, password) {
    return this.http.post(`${this.URL.MYURL}/login`, { username: username, password: password});
  }
}
