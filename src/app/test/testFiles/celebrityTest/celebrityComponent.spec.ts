import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CelebrityComponent } from '../../../celebrity/Celebrity.component';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { Title } from '@angular/platform-browser';
import { MockCelebrityService } from "./mockCelebrityService"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {CelebrityService} from "../../../service/celebrity.Service";

describe('CelebrityComponent', () => {
  var component: CelebrityComponent;
  let celebrityService: CelebrityService;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule({
      declarations: [ CelebrityComponent ],
      providers:[  {provide: CelebrityService, useClass: MockCelebrityService}],

      imports: [
        BrowserModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        HttpClientJsonpModule,
        FormsModule
       
      ]}
      ).overrideComponent(CelebrityComponent, {
        set: {
          providers: [
            { provide: CelebrityService, useClass: MockCelebrityService }
          ]
        }
      }).compileComponents();
    
  }));


  // test if CelebrityComponent can be instantiated
  it('should create the CelebrityComponent', function () 
  {
    // make the call to this function
    component = TestBed.createComponent(CelebrityComponent).componentInstance;
    //component = app.debugElement.componentInstance;
    expect(component).toBeTruthy();;   
  });
  
  // get all celebrities
  it('expects getAllCelebrities() to have been called', function () 
  {
    // make the call to this function
    component = TestBed.createComponent(CelebrityComponent).componentInstance;
    spyOn(component, 'getAllCelebrities');

    // make the call to this function
    component.getAllCelebrities();

    // Check internal function
    expect(component.getAllCelebrities).toHaveBeenCalled();
  });

  // test the ngOnit
  it('expects ngOnInit() to have been called', function () 
  {
    // make the call to this function
    component = TestBed.createComponent(CelebrityComponent).componentInstance;
    spyOn(component, 'ngOnInit');

    // make the call to this function
    component.ngOnInit();

    // Check internal function
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  // test the ngOnit
  it('expects getAllCelebrities() to have been called', function () 
  {
    // make the call to this function
    const event = { target: { value: 42, id:"firstname" }};
    component = TestBed.createComponent(CelebrityComponent).componentInstance;
    
    spyOn(component, 'columnFilter');
 
  
    // make the call to this function
    component.columnFilter(event);

    // Check internal function
    expect(component.columnFilter).toHaveBeenCalled();
  });

});
