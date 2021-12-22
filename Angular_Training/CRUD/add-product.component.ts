import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent 
{
  pid:number = 0;
  pname:string  = "";
  price:number  = 0;
  category:string="";
  qty:number=0;
  isPIdDisabled = false;
  message:string="";
 
  public parrar:Product[]=[];
  getProduct()
  {
    this.parrar=[
      {pid:1,pname:"IPhone",price:25000,category:"Mobiles",qty:1},
      {pid:2,pname:"IPhone XS",price:25000,category:"Mobiles",qty:2},
      {pid:3,pname:"LG",price:25000,category:"Refrigerator",qty:1},
      {pid:4,pname:"Samsung Whirlpool",price:25000,category:"Washing Machine",qty:2}
    ] ;
  }
    
  addProduct()
  {
    //let p1:Product=new Product(this.pid,this.pname,this.price,this.category,this.qty);
    let p1:Product=new Product();
    p1.pid=this.pid;
    p1.pname=this.pname;
    p1.price=this.price;
    p1.category=this.category;
    p1.qty=this.qty;
    let productExists:boolean= this.parrar.some(x=>x.pname===this.pname);
    this.clearFields();

    if(!productExists)
    {
      this.parrar.push(p1);

    }
    else{
     alert("Record already Exists");
    }


  }

  deleteProduct(id:number)
  {
    let index:number = this.parrar.findIndex(x => x.pid == id );
    this.parrar.splice(index, 1);
  }

  selectProduct(id:number)
  {
     let product:any = this.parrar.find(x => x.pid == id );
    this.pid =   product.pid;
    this.pname  =   product.pname;
    this.price    =   product.price;
    this.category = product.category;
    this.qty=product.qty;
    this.isPIdDisabled=true;
  }

  updateProduct()
  {
    let index:number = this.parrar.findIndex(x => x.pid == this.pid );
    this.parrar[index].pname = this.pname;
    this.parrar[index].price = this.price;
    this.parrar[index].category=this.category;
    this.parrar[index].qty=this.qty;
    this.clearFields();
  }

  include()
  {
   
  }
  clearFields()
  {
      this.isPIdDisabled = false;
      this.pid = 0;
      this.pname  = "";
      this.price  = 0;
      this.category="";
      this.qty=0;
  }
}
