console.log("Hello World!");
let a=10;
let b=5;
console.log("sum is:",a+b);
//template literal
let output=`The total price is ${a+b} Rupees.`;
console.log(output);

//arithmetic operators in js

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

//unary operators

console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//assignment operators
a=b;
a;
b;
//comparison operators
//logical operators

//conditional statments
//if ( har baar check krega)
//traffic light system
color= "red" ;
if (color== "red"){
    console.log("stop")
}
if (color=="yellow"){
    console.log("go slow")
}
if(color=="green")
{console.log("go")};

//asssignemnet
//1
num=12;
if (num%10==0)
    {console.log("good")}
else
{console.log("bad")};

//2

//const name = prompt("Enter your name:");
//const age = prompt("Enter your age:");

//alert(`${name} is ${age} years old.`);

//3
// Take the quarter number as input
const quarter = parseInt(prompt("Enter the quarter number (1-4):"));

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
}

// Take the string as input
const str = prompt("Enter a string:");

// Check the conditions for a golden string
if ((str.startsWith('A') || str.startsWith('a')) && str.length > 5) {
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}

//4 
// Take 3 numbers as input
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

// Find the largest number
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log(`The largest number is: ${largest}`);

//5
// Take two numbers as input
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));

// Check if they have the same last digit
if (num1 % 10 === num2 % 10) {
    console.log(`${num1} and ${num2} have the same last digit.`);
} else {
    console.log(`${num1} and ${num2} do not have the same last digit.`);
}

