import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent
{
  public prodArray:Product[]  = [
    {pid:1, pname : "IPhone",  price :45000,category:"Mobiles",qty:1} ,
    {pid:2, pname : "Lenovo",  price :55000,category:"Laptop",qty:2} ,
    {pid:3, pname : "Dell",  price :45000,category:"Laptop",qty:1} ,
    {pid:4, pname : "AO Smith",  price :25000,category:"Water Purifier",qty:1} ,
    {pid:5, pname : "LG",  price :45000,category:"Refrigerator",qty:1} ,
  ];

}