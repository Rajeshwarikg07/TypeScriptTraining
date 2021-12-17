class Person
{
    public name:string;
    public age:number=25;
    constructor(name:string)
    {
        this.name=name;
    }
}
class Employee extends Person
{
    public id:number;
    public job:string="Developer";
    constructor(id:number)
    {
        super("Robert");//invoke the base class constructor
        this.id=id;
    }
   

    public showDetails():void
    {
        console.log(`Person details: Id=${this.id}, Name=${this.name},Age=${this.age},Job=${this.job}`)
    }
}

let e:Employee=new Employee(10);
e.showDetails();
