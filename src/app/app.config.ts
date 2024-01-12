import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonBadge, IonItem, IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers:[
    provideRouter(routes), 
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
          timeOut: 5000,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
          newestOnTop: true,
      }),
      ReactiveFormsModule
    ),    
  ]
};
