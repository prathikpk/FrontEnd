const outerfunc=(a)=>{
    let b=10;
    const innerFunc=()=>{
        let sum=a+b;
        console.log("the sum of two numbers is "+sum);
    }
    innerFunc();
}
outerfunc(5);
//console.log(b);