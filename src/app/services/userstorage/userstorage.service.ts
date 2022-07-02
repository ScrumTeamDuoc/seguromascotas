import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstorageService {
  user: any = {};

  constructor() { }

  setUser(userData: any): void {
    this.user = userData;
  }

  getUser(): void {
    return this.user;
  }
}
