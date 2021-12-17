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
//Filter using arrow
var arr3 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var arr4 = [];
arr4 = arr3.filter(function (arr3) { return arr3.length > 6; });
console.log(arr4);
var num = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
// let positive_array:number[]=[];
// positive_array=num.filter(x=>x>=0);
// console.log(positive_array);
console.log(num.find(function (y) { return y > 5; }));
