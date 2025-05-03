//string methods
//1.STR.TRIM -trims whitespaces from both ends and returns a new string
// strings are immutable in js

//2.STR.TOUPPERCASE
//3.STR.TOLOWERCASE

//4.string method with argument : stringname.method(arg)
   //4.a str.indexof()
   //4.b str.method1().method2()

//5. slice methos - str.slice(start,end(required+1))

//replace method str.replace(what, with)
// repeat methos str.repeat(nooftimes)

//arrays  - a linear collection of large sequence of data
  //arrays are mutable
//array methods
//1.push add element at last 
//2.pop  remove element from from last 
//3.unshift add to start
//4.shift delete from start 
//5.indexof - arr.indexof("name")
//6. includes - search for a value and gives boolean output 
//7. concat method - joins two strings arr.concat(arr2) , doesnt change original array
//8. reverse()  arr.reverse() changes original array 
//9. slice arr.slice(start,end)
//10. splice removes/replaces/adds elements in a place , changes in original array

let colors=["red","yellow","blue","pink","orange"];
colors.splice(4);
colors.splice(0,1);
colors.splice(0,1,"black","grey");
//11. sort method string only

//assignment 
arr=[7,9,0,-2];
arr.slice(0,4);
//2.
arr.slice(-1,0);

//3.
let str="";
if (str.length==0)
  {console.log("string is blank")}
else
  {console.log("string is not blank")};

 //4.
const isLowerCaseAt = (str, index) => str[index]?.toLowerCase() === str[index];

console.log(isLowerCaseAt("Hello", 1));        // true (e)  
console.log(isLowerCaseAt("JavaScript", 4));   // false (S)  
console.log(isLowerCaseAt("Test", 10));        // undefined (invalid index)

 
//5. 
let str2="  hello  ";
console.log(str2.trim());


//6.
let arr6=[2,4,5,6,7,8];
console.log(arr6.includes(4));


