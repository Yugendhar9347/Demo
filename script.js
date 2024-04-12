//Callback Functions
function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function sumofterms(a,b,fn){
    let m = fn(a);
    let n = fn(b);
    return m+n;
}

console.log(sumofterms(2,3,square));
console.log("Hello World");