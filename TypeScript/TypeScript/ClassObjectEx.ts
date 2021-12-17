//Class Creation 
class Employee
{
    empno:number = 0;
    public ename:string ="";
    eadd:string="";

    //Constructor creation
    
    constructor (empno?:number,ename?:string,eadd:string="")
    {
        this.empno=empno;
        this.ename=ename;
        this.eadd=eadd;
    }

    public showDetails():void
    {
        console.log(`Employee id ${this.empno}`);
        console.log(`Employee Name ${this.ename}`);

    }

}

//object creation

let empObj:Employee=new Employee(12,"Robert");
empObj.showDetails();
let empObj1:Employee=new Employee(1,"Bangalore");
empObj1.showDetails();
let empObj2:Employee=new Employee();
empObj2.showDetails();