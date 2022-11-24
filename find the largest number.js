let num1=30;
let num2=35;
let num3=40;
let max;
if (num1>num2 && num1>num3) {
    max=num1
} else if (num2>num1 && num2>num3){
    max=num2;
}
else{
max=num3;
}
console.log(`Largest Number is ${max}`);
// Using ternary operator
max = (number1 > number2) ? (number1 > number3 ? number1 : number3) : (number2 > number3 ? number2 : number3);
console.log(`Largest Number is ${max}`);
