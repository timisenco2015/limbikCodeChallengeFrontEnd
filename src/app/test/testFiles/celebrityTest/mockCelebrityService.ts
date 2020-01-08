
import{Celebrity} from '../../../entity/celebrity';
import {Observable, of,EMPTY} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class MockCelebrityService {

    private celebritiesList:Celebrity[]=[];
    private celebrity;
    constructor()
    {
      this.populationArray();
    }

  
  // populate backend for the mock service
  populationArray()
  {
    this.celebrity = new Celebrity();
    this.celebrity.setId("01");
    this.celebrity.setFirstName("Frank");
    this.celebrity.setLastName("Idowu");
    this.celebrity.setProfession("Football");
    this.celebritiesList.push( this.celebrity);
 
    this.celebrity = new Celebrity();
    this.celebrity.setId("01");
    this.celebrity.setFirstName("Joe");
    this.celebrity.setLastName("Bidden");
    this.celebrity.setProfession("Politician");
    this.celebritiesList.push( this.celebrity);


    this.celebrity = new Celebrity();
    this.celebrity.setId("01");
    this.celebrity.setFirstName("Serena");
    this.celebrity.setLastName("Williams");
    this.celebrity.setProfession("Tennis Player");
    this.celebritiesList.push( this.celebrity);


    this.celebrity = new Celebrity();
    this.celebrity.setId("01");
    this.celebrity.setFirstName("Barack");
    this.celebrity.setLastName("WObama");
    this.celebrity.setProfession("Politician");
    this.celebritiesList.push( this.celebrity);
  }


  // get all celebrities
  getCelebrities(): Observable<any>
  {

    return of(this.celebritiesList)
      .pipe
      (
        map((response) => 
      {
        return response;
      }),
      catchError(this.handleError)); 
  
  }


 // for filtering data from the databse using firstname
 filterByFirstName(firstName:string):Observable<Celebrity[]>
 {
    return of(this.celebritiesList)
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


 // for filtering data from the databse using lastname
 filterByLastName(lastName:string):Observable<Celebrity[]>
 {
 
     return of(this.celebritiesList)
       .pipe
       (
         map((data) => 
         {
           return data.filter(celebrity => celebrity.lastName.toLowerCase().startsWith(lastName.toLowerCase()))
         }
       )
     );
 
  }

  // for filtering data from the databse using profession
  filterByProfession(profession:string):Observable<Celebrity[]>
  {
    return of(this.celebritiesList)
      .pipe
      (
        map((data) => 
        {
          return data.filter(celebrity => celebrity.profession.toLowerCase().startsWith(profession.toLowerCase()))
        }
      )
   );
  }
 

  private handleError(error: Response) 
  {
    console.error(error)
    return Observable.throw(error|| "Server error");
  }

}