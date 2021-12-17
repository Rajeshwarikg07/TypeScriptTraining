var Person = /** @class */ (function () {
    function Person() {
        this.fname = "Ravi";
        this.lname = "Kumar";
        this.age = 25;
    }
    Person.prototype.showDetails = function () {
        console.log("Person Details : First Name = ".concat(this.fname, ", Last Name = ").concat(this.lname, ", Age = ").concat(this.age));
    };
    return Person;
}());
var obj = new Person();
obj.showDetails();
