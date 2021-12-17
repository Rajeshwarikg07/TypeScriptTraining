class Person
{
   public name: string  = "Scott";
   public age: number  = 25;

   public showDetails():void
   {       
       console.log("Person Name : " + this.name);
       console.log("Person Age : " + this.age);
   } 
}

class PersonDetails  extends Person
{
    public id:number = 10;
    public job:string  = "Lead";
    
    public showDetails():void
    {
       //super.showDetails(); // invokes base class method

        console.log("Person Id : " + this.id);
        console.log("Person Job : " + this.job);
    
    } 
}


let obj:Person=new Person()
obj.showDetails(); //invokes Base class method
console.log("--------------------------------------------------")

let obj1:PersonDetails=new PersonDetails();
obj1.showDetails(); // invokes derived class showdetails method
console.log("--------------------------------------------------")

let obj2:Person = new PersonDetails(); //base class ref variable
obj2.showDetails(); //invokes derived class method