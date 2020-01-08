import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { CelebrityComponent } from '../app/celebrity/celebrity.component';
import {CelebrityService} from "./service/celebrity.Service";
import {ApiService} from "../app/service/apiService";
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    CelebrityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
   
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },CelebrityService,ApiService],
  bootstrap: [CelebrityComponent]
})
export class AppModule { }
