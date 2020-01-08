import{Celebrity} from '../../../entity/celebrity';
import {Observable, of,EMPTY} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable()
export class MockAPIService 
{
    
  private celebritiesList:Celebrity[]=[];
  private celebrity;
   private path = 'api/celebrities'; 
  constructor(private _http: HttpClient)
  {
      
  }


  getAllCelebrities(): Observable<any> 
  {
      
    return this._http.get('api/celebrities').pipe(catchError(this.formatErrors));
  }


 
  private formatErrors(error: any) 
  {
        
    return throwError(error.error);
  }
   
  
}