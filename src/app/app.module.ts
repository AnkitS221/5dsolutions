import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { AddMomentComponent } from './pages/add-moment/add-moment.component';
import { MomentListComponent } from './pages/moment-list/moment-list.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from './services/api-service/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { TagInputModule } from 'ngx-chips';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    AddMomentComponent,
    MomentListComponent,
    SignInComponent,
    SignUpComponent,
    DefaultLayoutComponent,
    DndDirective,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    IconsProviderModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    TagInputModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
