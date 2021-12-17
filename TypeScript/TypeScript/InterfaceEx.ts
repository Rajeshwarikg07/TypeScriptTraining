interface IPerson
{
    fname:string;
    lname:string;
    age:number;

    showDetails();
}

class Person implements IPerson
{
    
    public fname:string ="Ravi";
    public lname:string="Kumar";
    public age:number=25;

    public showDetails():void
    {
        console.log(`Person Details : First Name = ${this.fname}, Last Name = ${this.lname}, Age = ${this.age}`)
    }
}

let obj:Person= new Person();
obj.showDetails();