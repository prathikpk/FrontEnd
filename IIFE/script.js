var a=2;
var b=5;
(function(a,b){
    console.log("sum of number is:" +(a+b));

    console.log("division of number is:"+(a/b));

    console.log("Subtraction of number is:"+(a-b));

    console.log("multiplication of number is:"+(a*b));
})(10,5);

//it cannot acccess the value inside the function hence there is no conflict even if the var name is same
console.log("outside the function:"+(a+b));