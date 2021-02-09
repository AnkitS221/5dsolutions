import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
})
export class SignUpModule {
  public first_name: string = '';
  public last_name: string = '';
  public mobile_number!: number;
  public email: string = '';
  public password: string = '';
  public city: string = '';
}
