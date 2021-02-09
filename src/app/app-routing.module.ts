import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoadingGuard } from './guards/loading-guard/loading.guard';
import { AddMomentComponent } from './pages/add-moment/add-moment.component';
import { MomentListComponent } from './pages/moment-list/moment-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full',
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'add-moment',
        canActivate: [LoadingGuard],
        loadChildren: () =>
          import('./pages/add-moment/add-moment.module').then(
            (m) => m.AddMomentModule
          ),
      },
      {
        path: 'moment-list',
        loadChildren: () =>
          import('./pages/moment-list/moment-list.module').then(
            (m) => m.MomentListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
