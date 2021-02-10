import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  isCollapsed = false;
  constructor(private localSrv: LocalStorageService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.localSrv.removeUserData();
    this.router.navigate(['sign-up'], { replaceUrl: true });
  }
}
