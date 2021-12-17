//Class Creation 
class Customer
{
    id:number = 0;
    name:string ="";
    city:string="";

    //Constructor creation
    
    constructor (id:number=0,name:string="",city:string="")
    {
        this.id=id;
        this.name=name;
        this.city=city;
    }

    public showDetails():void
    {
        console.log(`Customer Details: Id= ${this.id}, Name= ${this.name}, City=${this.city}`);

    }

}

//object creation

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, "Scott");
let c4:Customer = new Customer(10256,"Robert" , "Bengaluru");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
