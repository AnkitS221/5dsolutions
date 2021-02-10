import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.scss'],
})
export class AddMomentComponent implements OnInit {
  title: any;
  comment: any;
  files: any[] = [];
  items: any[] = [];
  tags: any[] = [];
  constructor(
    private apiSrv: ApiServiceService,
    private alertSrv: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * on file drop handler
   */
  onFileDropped($event: any[]) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals?: any | undefined) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }

  submitMoment() {
    for (let result of this.items) {
      this.tags.push(result.value);
    }
    let momentPayload = {
      title: this.title,
      comment: this.comment,
      tags: this.tags,
    };
    if (
      this.title != undefined &&
      this.comment != undefined &&
      this.items.length > 0
    ) {
      if (this.files.length > 0) {
        this.apiSrv.postMomentDetails(momentPayload, this.files[0]).subscribe(
          (result) => {
            this.router.navigate(['moment-list']);
          },
          (err) => {
            this.alertSrv.errorAlert(err.error.message[0]);
          }
        );
      } else {
        this.alertSrv.errorAlert('Please insert images for the Moments');
      }
    } else {
      this.alertSrv.errorAlert('Please enter all fields');
    }
  }
}
