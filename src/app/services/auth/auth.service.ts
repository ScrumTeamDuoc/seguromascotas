import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { UserstorageService } from '../userstorage/userstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: String = 'https://j63a7myjdptjag73nlvq5pnb640ukmcl.lambda-url.us-east-1.on.aws/';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private userStorage: UserstorageService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  login(userform: any) {
    //console.log(userform)
    return this.http.post<any>(`${this.apiUrl}/user?login=true`, userform, { headers: this.headers })
  }

  setToken(token: any) {
    console.log(token)
    let decodedToken: any = jwt_decode(token);
    console.log(decodedToken)
    let expDate = new Date(0);
    expDate.setUTCSeconds(decodedToken['exp'])
    localStorage.setItem('user_mail', decodedToken['payload']['username']);
    localStorage.setItem('expires_at', JSON.stringify(expDate));
    this.userStorage.setUser(decodedToken['payload']);
    return this.isLoggedIn()
  }

  public isLoggedIn() {
    let currentDate = new Date();
    let loggedIn;
    if (currentDate <= new Date(this.getExpirationDate())) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return loggedIn
  }

  getExpirationDate() {
    let exp: any = localStorage.getItem('expires_at');
    exp = JSON.parse(exp);
    return exp
  }

  logout() {
    localStorage.removeItem('user_mail');
    localStorage.removeItem('expires_at');

    return this.isLoggedIn();
  }

  sendNotification(userform: any) {
    return this.http.post<any>(`${this.apiUrl}/user?email=true`, userform, { headers: this.headers })
  }
}
