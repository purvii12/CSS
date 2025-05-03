// object literals key value pairs {key:value};
Math.floor(Math.random()* 10 ) + 1;

Math.floor(Math.random()* 100 ) + 1;

Math.floor(Math.random()* 5 ) + 1;

Math.floor(Math.random()* 10 ) + 20;  //to generate 5 random numbers between 20 and 25

//guessing game
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: your guess was too small. please try again");
    } else {
        guess = prompt("hint: your guess was too large. please try again");
    }
}


//1
let dice= Math.floor(Math.random()*6)+1;
console.log(dice);

//2
const car={name:"MarutiSuzuki",model:"MarutiSuzukiDzire",color:"white",};
console.log(car.name)

//3
const Person={name:"JaneDoe",age:21,city:"NewJersey",};
Person.city="NewYork";Person.country="UnitedStates";
console.log(Person)
