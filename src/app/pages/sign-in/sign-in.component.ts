import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  password: any;
  email: any;
  constructor(
    private router: Router,
    private apiSrv: ApiServiceService,
    private localSrv: LocalStorageService,
    private alertSrv: AlertService
  ) {}

  ngOnInit(): void {}

  goToDashboard() {
    let loginPayload = {
      email: this.email,
      password: this.password,
    };
    this.apiSrv.postLoginDetails(loginPayload).subscribe(
      (result: any) => {
        this.localSrv.setUserData(result.data);
        this.router.navigate(['add-moment']);
      },
      (err) => {
        this.alertSrv.errorAlert(err.error.message);
        console.log(err);
      }
    );
  }
}
