import { Component,OnInit } from '@angular/core';
import {CelebrityService} from "../service/celebrity.Service";
import{Celebrity} from '../entity/celebrity';
import {interval} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
selector: 'app-root',
templateUrl: './celebrity.component.html',
styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent {
  title = 'simple pagination demo';
  collection = [];
  celebrityList: Celebrity[]=[];

  constructor(private celebrityService:CelebrityService,private spinner: NgxSpinnerService)
  {
    
  }

  ngOnInit() 
  {
    this.spinner.show(); 

    // this method is called at the page load to get data from service 
    this.getAllCelebrities() 
  }

 
  // this method gets data from service(celebrityService.ts is used to get data through http from databse)
  // it also automatic refresh (polling) at every hour
  getAllCelebrities() 
  {
    this.spinner.show();
    
    interval(500000)
    .pipe
    (
      startWith(0),
      switchMap
      (() => this.celebrityService.getCelebrities()
      )
    )
    .subscribe(response => 
      {
        this.spinner.hide();
     
        response.data.forEach(element => 
          {
            var celebrity = JSON.parse(element);
            this.celebrityList.push(celebrity)
          }
        );
        for(let i=0;i<this.celebrityList.length;i++)
        {
          let Obj = this.celebrityList[i];
          this.collection.push(Obj);
        } 
      },error => 
        {
          alert(error.message);
        }
    );
  }

  //filter data base on the parameter enter from the html 
  // paramter: (1) firstname (2) middlename (3) profession
  columnFilter(event: any) 
  { 
    var value:string = event.target.id; 
    var filterValues = event.target.value;
    if(value==="firstname")
      {
        this.celebrityService. filterByFirstName(filterValues).subscribe(response => 
          {
            this.celebrityList=response;
          
          },error => 
          {
            alert(error.message);
          });
      }
    
    else if(value==="lastname")
      {
        this.celebrityService.filterByLastName(filterValues).subscribe(response => 
          {
            this.celebrityList=response;
          }, error => 
          {
            alert(error.message);
          });
      }
    else if(value==="profession")
      {
        this.celebrityService.filterByProfession(filterValues).subscribe(response => 
          {
            this.celebrityList=response;
          }, error => 
          {
            alert(error.message);
          });
      }

      this.collection=[];

      for(let i=0;i<this.celebrityList.length;i++){
        let Obj = this.celebrityList[i];
        
        this.collection.push(Obj);
      }
  }

}
