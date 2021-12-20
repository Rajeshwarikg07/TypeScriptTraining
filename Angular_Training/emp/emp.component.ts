import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent
{
  public eid:number=1234;
  public ename:string ="Stephen";
  public ejob:string ="Manager";
  public esalary:number=75000;
  public edepo:number=10;
}


