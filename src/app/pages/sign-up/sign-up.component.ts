import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { SignUpModule } from './sign-up.module';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupMod: SignUpModule = new SignUpModule();
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiServ: ApiServiceService,
    private toastr: ToastrService,
    private router: Router,
    private localSrv: LocalStorageService
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitClicked() {
    this.apiServ.postSignupDetails(this.signupMod).subscribe(
      (result: any) => {
        this.router.navigate(['sign-in']);
      },
      (error) => {
        console.log(error.error.message[0]);
        alert(error.error.message[0]);
      }
    );
  }
}
