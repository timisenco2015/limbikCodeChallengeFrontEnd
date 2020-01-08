import {Injectable} from '@angular/core';
import{Celebrity} from '../entity/celebrity';
import {HttpClient} from '@angular/common/http';
import {Observable, of,EMPTY} from 'rxjs';
import { catchError, map,publishReplay, refCount} from 'rxjs/operators';
import { ApiService } from './apiService';


@Injectable()
export class CelebrityService
{
  private _celebrity:Celebrity;
  private _http: HttpClient;
  _apiService: ApiService;
  private static allCelebritiesList:any;

  constructor(private http: HttpClient,_apiService: ApiService)
  {
    this._http=http;
    this._apiService = _apiService;
  }


  // get all celebrities from database
  // also does caching of data
  getCelebrities(): Observable<any>
  {

    return  this._apiService.getAllCelebrities("celebrity/getAll").pipe
    (

      map((response) => 
      {

        this.converJSonStringArray(response.data);  
        return response;
      }
      ),
      publishReplay(100), // this tells Rx to cache the latest emitted
     refCount(),
      catchError(this.handleError)); // to handle error

  }

  // for filtering data from the databse using firstname
  filterByFirstName(firstName:string):Observable<Celebrity[]>
  {
    if(CelebrityService.allCelebritiesList!=null && CelebrityService.allCelebritiesList !="" && CelebrityService.allCelebritiesList !="undefined")
    {

      return of(CelebrityService.allCelebritiesList)
        .pipe
          (
            map((data) => 
            {

                return data.filter(celebrity => celebrity.firstName.toLowerCase().startsWith(firstName.toLowerCase()
                ))
            }
          )
        );
      }
    else
    {
      return EMPTY;
    }
  }


  // for filtering data from the databse using lastname
  filterByLastName(lastName:string):Observable<Celebrity[]>
  {
    if(CelebrityService.allCelebritiesList!=null && CelebrityService.allCelebritiesList !="" && CelebrityService.allCelebritiesList !="undefined")
    {
      return of(CelebrityService.allCelebritiesList)
        .pipe
        (
          map((data) => 
          {
            return data.filter(celebrity => celebrity.lastName.toLowerCase().startsWith(lastName.toLowerCase()))
          }
        )
      );
    }
    else
    {
      return EMPTY;
    }
  }

  // for filtering data from the databse using profession
  filterByProfession(profession:string):Observable<Celebrity[]>
  {
    if(CelebrityService.allCelebritiesList!=null && CelebrityService.allCelebritiesList !="" && CelebrityService.allCelebritiesList !="undefined")
    {
      return of(CelebrityService.allCelebritiesList)
        .pipe
        (
          map((data) => 
          {
            return data.filter(celebrity => celebrity.profession.toLowerCase().startsWith(profession.toLowerCase()))
          }
        )
      );
    }
    else
    {
      return EMPTY;
    }
  }


  // for data returned from the database is in JSON string format. This method is to convert 
  //it back to arrays of Celebrity Object
  private converJSonStringArray(data:any)
  {

    let celebrityList=[];
    data.forEach
    (element => 
      {
        var celebrity = JSON.parse(element);
        celebrityList.push(celebrity);
      }
    );
    CelebrityService.allCelebritiesList =  celebrityList
  }
  private handleError(error: Response) 
  {
    console.error(error)
    return Observable.throw(error|| "Server error");
  }
}