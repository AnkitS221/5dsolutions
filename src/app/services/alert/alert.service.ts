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

  confirmationAlert(message: any) {
    swalDefine(message, {
      buttons: {
        cancel: 'No',
        defeat: 'Yes',
      },
    }).then((value: any) => {
      switch (value) {
        case 'defeat':
          swalDefine('Moment Deleted!');
          break;

        case 'cancel':
        //swalDefine('Gotcha!', 'Pikachu was caught!', 'success');
      }
    });
  }
}
