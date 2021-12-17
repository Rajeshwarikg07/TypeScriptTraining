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
    function Person(name) {
        this.age = 25;
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id) {
        var _this = _super.call(this, "Robert") || this;
        _this.job = "Developer";
        _this.id = id;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        console.log("Person details: Id=".concat(this.id, ", Name=").concat(this.name, ",Age=").concat(this.age, ",Job=").concat(this.job));
    };
    return Employee;
}(Person));
var e = new Employee(10);
e.showDetails();
