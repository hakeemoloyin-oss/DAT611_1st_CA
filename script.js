function multiplyNumba (...arguments) 
{
    if (arguments.length === 0) return 0;
    return arguments.reduce((multiply, arg) => multiply * arg, 1);
}

console.log("The Result of the Multiplication is", multiplyNumba(4,5,7));
console.log("The Result of the Multiplication is", multiplyNumba(8,2,4));
console.log("The Result of the Multiplication is", multiplyNumba(9,5,9));
console.log("The Result of the Multiplication is", multiplyNumba(3,3,3));
updqte