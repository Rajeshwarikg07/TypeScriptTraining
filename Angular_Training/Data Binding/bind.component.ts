import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent 
{
  name:string="";
  price:number=0;
  qty:number=0;
  total:number=0;

  getTotal()
  {
    this.total=this.price*this.qty;
  }

}


