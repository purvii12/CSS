//functions
function printpoem()
{
    console.log("twinkle twinkle little star");
    console.log("how i wonder what you are ");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");
}

printpoem();

function dice()
{
    Math.floor(Math.random()*6)+1;
}
dice();

function sum(a,b)
{
    console.log(a+b);
}
sum(5,6);
sum(sum(1,2),3);   // to add more than just 2 numbers , put as parameters

function avg(a,b,c)
{
    let avgvalue=(a+b+c)/3;
    console.log(avgvalue);
}
avg(4,7,8);

//multiplication table

function printtable(n)
{
    for (let i=n ; i<=n ; i=i+n)
    {
        console.log(i);
    }
}
printtable(5);
printtable(73);

//return keyword - used to return some value

//sum of n numbers
function getsum(n)
{
    for(let i=0 ; i<=n ;i++)
    {
        sum=sum+i;
    }
    return sum;
}


// function to conactenate all strings in an array

let str=["hi","hello","bonjour","hola"];

function concat(str)
{
    let result="";

    for(let i=0 ; i<str.length;i++)
    {
        result+=str[i];
    }
    return result;
}

//scope - accessibilty of variables , objects etc

//function expressions
let sum= function(a,b){
    return a+b;
}
sum();

//higher orderfunction - retuns a function

// methods 

const calculator={
    num:55;
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

//1.

function one(arrn, nummber){
        let result = [];
        for (let i = 0; i < arrn.length; i++) {
            if (arrn[i] > number) {
                result.push(arrn[i]);
            }
        }
        return result;
}
let arrn=[1,5,8,12,3,6];



//2.
function getUniqueCharacters(str) {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i];
        }
    }
    return uniqueChars;
}

let strn = "abcdabcdefgggh";
let result = getUniqueCharacters(str);
console.log(result); 

//3.
function getLongestCountryName(countries) {
    return countries.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

// Example usage:
let countryList = ["Australia", "Germany", "UnitedStatesofAmerica"];
let result2= getLongestCountryName(countryList);
console.log(result2);  // Output: "UnitedStatesofAmerica"


//4.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
let str4 = "Hello World!";
let result4 = countVowels(str4);
console.log(result4);  // Output: 3


//5.
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Example usage:
let randomNum = generateRandomNumber(1, 100);
console.log(randomNum);  // Output: A random number between 1 and 100 (inclusive)

//this keyword
//arrowfunctions

//array methods 
//1. foreach - for each element of array performs a defined function , could be used to access individual properties
letarrq=[1,2,3,4,5];
arrq.forEach(function (el){
    console.log(el);
} );

//2. map 
//3. filter - filters some 
//4. every - returns a boolean value for callback for each element in the function (like logical and )
//5. reduce - reduce the array to a single value
//calculate maximum using r4educe 
let nums=[2,3,4,5,6,9,7,8];
let resultd = nums.reduce((max , el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

//spread - to expand an iterable into multiple values (...arr)

console.log(...nums);

//rest - allows to bundle args and store them in an array   
//destructuring - use curly braces for object and square for array

