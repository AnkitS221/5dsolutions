import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
interface DataItem {
  name: string;
  chinese: number;
  math: number;
  english: number;
}
@Component({
  selector: 'app-moment-list',
  templateUrl: './moment-list.component.html',
  styleUrls: ['./moment-list.component.scss'],
})
export class MomentListComponent implements OnInit {
  listOfColumn = [
    {
      title: 'Sr. No',
      compare: null,
      priority: false,
    },
    {
      title: 'Image',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3,
    },
    {
      title: 'Title',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3,
    },
    {
      title: 'Tags',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3,
    },
    {
      title: 'Action',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3,
    },
    // {
    //   title: 'Name',
    //   compare: null,
    //   priority: false,
    // },
    // {
    //   title: 'Chinese Score',
    //   compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
    //   priority: 3,
    // },
    // {
    //   title: 'Math Score',
    //   compare: (a: DataItem, b: DataItem) => a.math - b.math,
    //   priority: 2,
    // },
    // {
    //   title: 'English Score',
    //   compare: (a: DataItem, b: DataItem) => a.english - b.english,
    //   priority: 1,
    // },
  ];
  listOfData: any[] = [];
  // {
  //   name: 'John Brown',
  //   chinese: 98,
  //   math: 60,
  //   english: 70,
  // },
  constructor(
    private apiSrv: ApiServiceService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);

    this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 2000);
    this.apiSrv.getMomentDetails().subscribe((result: any) => {
      this.listOfData = result.data;
      console.log(this.listOfData);
    });
  }
}
