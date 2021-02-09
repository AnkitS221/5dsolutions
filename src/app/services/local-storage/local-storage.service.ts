import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setUserData(data: any) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUserData() {
    return localStorage.getItem('userData');
  }
}
