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

  public postMomentDetails(data: any, fileToUpload: any) {
    console.log(data.tags);

    const formData: FormData = new FormData();
    formData.append('propic', fileToUpload, fileToUpload.name);
    formData.append('title', data.title);
    formData.append('comment', data.comment);
    formData.append('tags', data.tags);
    console.log(formData);

    return this.httpClient.post(this.apiString + 'add-moment', formData);
  }

  public getMomentDetails() {
    return this.httpClient.get(this.apiString + 'moment-list');
  }
}
