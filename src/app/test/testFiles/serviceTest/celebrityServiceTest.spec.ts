
import {TestBed} from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from "../../../service/apiService";
import { APP_CONFIG, AppConfig } from '../../../app.config';
import {MockAPIService} from "./mockAPIService";
import{CelebrityService} from "../../../service/celebrity.Service";
import {InMemCelebrityService} from "./inMemCelebrityMockService";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('CelebrityServiceTest', ()=>
{
  let celebrityService: CelebrityService;

  afterEach(() =>
  {
    celebrityService=null;
  });
    

  beforeEach(()=>
  {
    TestBed.configureTestingModule({providers:[ { provide: APP_CONFIG, useValue: AppConfig },ApiService,CelebrityService],imports: [ HttpClientTestingModule,HttpClientInMemoryWebApiModule.forRoot(InMemCelebrityService)]})
    celebrityService = TestBed.get(CelebrityService);

  });


  // test for get all celebrities
  it('get all celebrities',()=>
  {
    celebrityService.getCelebrities().subscribe(response => 
      {
        response.data.forEach(element => 
        {
          var celebrity = JSON.parse(element);
          this.celebrityList.push(celebrity)
          var celebrity = JSON.parse(element);
          expect(celebrity).toBe(null)
        });
      });   
  });


  // test for filter by firstname
  it('filter car list by firstname', () =>
  {
    celebrityService.filterByFirstName("Frank").subscribe(res => 
    {
      expect(res.length).toBeGreaterThanOrEqual(1);
          
    });
  });


  // test for filter by lastname
  it('filter car list by lastname', () =>
  {
    celebrityService.filterByLastName("Lampard").subscribe(res => 
    {
      expect(res.length).toBeGreaterThanOrEqual(1);
          
    });
  });


  // test for filter by profession
  it('filter car list by profession', () =>
  {
    celebrityService.filterByProfession("Footballer").subscribe(res => 
    {
      expect(res.length).toBeGreaterThanOrEqual(1);
          
    });
  });
        
      
});













   