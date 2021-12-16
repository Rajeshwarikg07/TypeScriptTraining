// function greeting(name:string):void
// {
//     console.log("Welcome "+name);
//     console.log(`Welcome ${name}`);
// }
// greeting("John");
//Named functions Example
var arr1 = [1, 2, 3, 4];
var arr2 = [];
arr2 = arr1.map(Math.sqrt);
console.log(arr1);
console.log(arr2);
function getMultiples(x) {
    return x * 2;
}
arr2 = arr1.map(getMultiples);
console.log(arr2);
//Anonymous function
arr2 = arr1.map(function (x) {
    return x * 5;
});
console.log(arr2);
//Arrow Function
arr2 = arr1.map(function (x) { return x * 10; });
console.log(arr2);
