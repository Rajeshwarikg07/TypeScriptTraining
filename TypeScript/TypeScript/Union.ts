let rating: number|string;  
rating = 5;  

if( (typeof rating) == "number"  )
{
    console.log("The Numeric value of a rating  is: " + rating);  
    console.log(typeof rating);
    console.log("---------------------");
}

rating = "Excellent";
console.log("The String value of a rating  is: " + rating);  
console.log(typeof rating);
console.log("---------------------");