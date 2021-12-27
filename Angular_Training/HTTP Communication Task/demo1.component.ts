import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component 
{
  customersArray:any[] = [];

  constructor(private httpObj:HttpClient)
  {

  }

  getData_click()
  {
      let url = "https://reqres.in/api/users";

      let source:Observable<any> =  this.httpObj.get(url);

      source.subscribe((result:any) =>  {
          this.customersArray = result.data;
        //console.log(result.data);
      });

  }
}
