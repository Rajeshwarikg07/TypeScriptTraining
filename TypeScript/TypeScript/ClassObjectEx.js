//Class Creation 
var Employee = /** @class */ (function () {
    //Constructor creation
    function Employee(empno, ename) {
        if (ename === void 0) { ename = ""; }
        this.empno = 0;
        this.ename = "";
        this.empno = empno;
        this.ename = ename;
    }
    Employee.prototype.showDetails = function () {
        console.log("Employee id ".concat(this.empno));
        console.log("Employee Name ".concat(this.ename));
    };
    return Employee;
}());
//object creation
var empObj = new Employee(12, "Robert");
empObj.showDetails();
var empObj1 = new Employee(12);
empObj1.showDetails();
var empObj2 = new Employee();
empObj2.showDetails();
