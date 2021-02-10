import { Injectable } from '@angular/core';
const swalDefine = require('sweetalert');

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  successAlert(message: any) {
    swalDefine('Good job!', message, 'success');
  }

  errorAlert(message: any) {
    swalDefine('Error', message, 'error');
  }
}
