import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/emp';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent 
{
public mode:string="";

  public prod:any[]=[
    {pname:"IPhone",category:"Mobiles"},
    {pname:"Jio",category:"Mobiles"},
    {pname:"LG",category:"Refrigerator"},
    {pname:"Lenovo",category:"Laptop"},
    {pname:"Dell",category:"Laptop"},
  ];
}
