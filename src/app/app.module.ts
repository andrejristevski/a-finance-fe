import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './feature-modules/login/login.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

import { TokenInterceptor } from './interceptors/token-interceptor';

import { AuthGuard } from './feature-modules/login/auth.guard';
import { NavbarModule } from './feature-modules/navbar/navbar.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataService } from './services/data.service';
import { ChartService } from './services/chart.service';
import { NetworkService } from './services/network.service';
import { UserSettingsService } from './services/user-settings-service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    LoginModule,
    HttpModule,
    HttpClientModule,
    SnotifyModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, DataService, ChartService, NetworkService, 
    UserSettingsService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true 
  } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
