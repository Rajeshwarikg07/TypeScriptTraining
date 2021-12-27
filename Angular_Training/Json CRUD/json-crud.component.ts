import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-json-crud',
  templateUrl: './json-crud.component.html',
  styleUrls: ['./json-crud.component.css']
})
export class JsonCrudComponent implements OnInit {

  constructor(private httpObj: HttpClient) {

  }
  ngOnInit(): void {
  }

  pid:number = 0;
  pname:string  = "";
  price:number  = 0;
  category:string="";
  qty:number=0;
  isPIdDisabled = false;
  message:string="";
  url:string  = "http://localhost:3000/products";
  public parrar:Product[]=[];

  getProduct()
  {
    this.httpObj.get(this.url).subscribe( (response:any) =>{
      this.parrar = response;
    });

  }

  addProduct()
  {
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
      this.httpObj.post(this.url, p1).subscribe( (response:any) =>{
        console.log("New Products are added to server.");
        alert("New Products are added to server.");
        this.clearFields();
        this.getProduct();
      });

    }
    else{
     alert("Record already Exists");
    }
  }

  deleteProduct(id:number)
    {
      // `${this.url}/${dno}`
      //  this.url + "/" + dno
      this.httpObj.delete(this.url + "/" + id).subscribe( (response:any) =>{
        console.log("Requested Product details are deleted from  server.");
        alert("Requested Product details are deleted from  server.");
        this.getProduct();  // to get all the updated results
      });
    }

    selectProduct(id:number)
    {
      this.httpObj.get(this.url + "/" + id).subscribe( (response:any) =>{
        let product:any = response;
        this.pid =   product.pid;
        this.pname  =   product.pname;
        this.price    =   product.price;
        this.category = product.category;
        this.qty=product.qty;
        this.isPIdDisabled=true;

      });
    }

    updateProduct()
  {
    let p1:Product = new Product();
    p1.pid=this.pid;
    p1.pname=this.pname;
    p1.price=this.price;
    p1.category=this.category;
    p1.qty=this.qty;


    this.httpObj.put(this.url + "/" + this.pid, p1).subscribe( (response:any) =>{
      console.log("Requested Dept details are updated to server.");
      alert("Requested Dept details are updated to server.");
      this.clearFields();
      this.getProduct();
    });
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
