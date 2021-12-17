var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Scott";
        this.age = 25;
    }
    Person.prototype.showDetails = function () {
        console.log("Person Name : " + this.name);
        console.log("Person Age : " + this.age);
    };
    return Person;
}());
var PersonDetails = /** @class */ (function (_super) {
    __extends(PersonDetails, _super);
    function PersonDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 10;
        _this.job = "Lead";
        return _this;
    }
    PersonDetails.prototype.showDetails = function () {
        //super.showDetails(); // invokes base class method
        console.log("Person Id : " + this.id);
        console.log("Person Job : " + this.job);
    };
    return PersonDetails;
}(Person));
var obj = new Person();
obj.showDetails(); //invokes Base class method
console.log("--------------------------------------------------");
var obj1 = new PersonDetails();
obj1.showDetails(); // invokes derived class showdetails method
console.log("--------------------------------------------------");
var obj2 = new PersonDetails();
obj2.showDetails();
