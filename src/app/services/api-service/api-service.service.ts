import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiString = environment.serverUrl;
  constructor(private httpClient: HttpClient) {}

  public postSignupDetails(data: any) {
    return this.httpClient.post(this.apiString + 'signup', data);
  }

  public postLoginDetails(data: any) {
    return this.httpClient.post(this.apiString + 'signIn', data);
  }
}
