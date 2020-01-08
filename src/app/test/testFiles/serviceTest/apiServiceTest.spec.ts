import {TestBed} from '@angular/core/testing'
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import {ApiService} from "../../../service/apiService";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { Title } from '@angular/platform-browser';
import {InMemCelebrityService} from "./inMemCelebrityMockService";
import { map} from 'rxjs/operators';
import { of} from 'rxjs';
describe('ApiService', ()=>
{
    let apiService:ApiService;
  
    beforeEach(()=>
    {
        TestBed.configureTestingModule({providers:[Title, { provide: APP_CONFIG, useValue: AppConfig },ApiService],imports: [ HttpClientTestingModule,HttpClientInMemoryWebApiModule.forRoot(InMemCelebrityService)]})
        apiService = TestBed.get(ApiService);
            
    });
    
    
    afterEach(() =>
    {
        apiService =null;
    });
   
    // test for get all celebrities
    it('get all celebrities',()=>
    {
      
        of (apiService.getAllCelebrities("celebrities")).pipe
        (
            map((response) => 
            {
                expect(response).not.toBe(null);
          
            }
        ))
    });

});

