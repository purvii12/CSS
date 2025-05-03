//1
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0 ; i<arr.length; i++)
    {if(arr[i]==num){arr.splice(i,1);}}
console.log(arr);

//2
let nums=[1,2,3,4,5];
const square=nums.map((num)=>num*num);
console.log(square);
let sum=square.reduce((acc,cur)=>acc+cur,0);
let avg=sum/nums.length;
console.log(avg);

//3.
let numbers=[2,4,6,8,-2,-4];
console.log(numbers.map((number)=>number+5));

//4.
const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
    doubleAndReturnArgs([1,2,3],4,4);
    doubleAndReturnArgs([2],10,4);

//5.
const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:3,d:4}); 
