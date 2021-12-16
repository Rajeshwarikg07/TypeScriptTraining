// function greeting(name:string):void
// {
//     console.log("Welcome "+name);
//     console.log(`Welcome ${name}`);

// }

// greeting("John");

//Named functions Example

let arr1:number[]=[1,2,3,4];
let arr2:number[]=[];
arr2=arr1.map(Math.sqrt);
console.log(arr1);

console.log(arr2);

 function getMultiples(x:number):number
 {
    return x*2;
 }

 arr2=arr1.map(getMultiples);
 console.log(arr2);


 //Anonymous function
arr2=arr1.map(function (x:number)
{
    return x*5;
});

console.log(arr2);

//Arrow Function
arr2=arr1.map(x=>x*10);
console.log(arr2);




