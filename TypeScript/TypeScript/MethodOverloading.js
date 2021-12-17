var OverloadTest = /** @class */ (function () {
    function OverloadTest() {
    }
    OverloadTest.prototype.Add = function (x, y) {
        console.log(x + y);
    };
    return OverloadTest;
}());
var obj = new OverloadTest();
obj.Add(200, 300);
obj.Add("Hello", 123);
