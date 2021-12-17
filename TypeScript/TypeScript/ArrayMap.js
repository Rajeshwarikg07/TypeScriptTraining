// let numbers:number[]=[4,9,16,25];
// console.log(numbers.map(Math.sqrt));
var ages = [3, 10, 18, 20];
console.log(ages.find(checkAge));
function checkAge(age) {
    return age > 18;
}
