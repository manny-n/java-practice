// today is gonna be over numbers ref notes

let age = 34; //integers
let age2 = 2.2; //decimal numb

const add = age + age2;
const sub = age - age2;
const mult = age * age2;
const div = age / age2;

console.log(sub); //replace (-) with the tag after the command

// +=, -=. *=, ++, --, %

// let num = 40;
// num +=4; //faster way of adding a number
// num -=1; //order makes it = 43
// num ++; //just adds one
// num --; //subtracts j one
// console.log(num);

// //% is kind of like the remainder but like how
// // let account = 10;

// // let remainder = account % 3;
// // console.log(remainder);

// let pizza = 10;
// let children = 3;

// const slices = pizza % children

// console.log("i will have " + slices + " for myself");

// //basic math

// const random = 4 + 6 + 10 * 10;
// console.log(random);

// const random2 = (4 + 6 + 10) * 10;
// console.log(random2);


// // num2 = '3'; //reassigns value of num2 to pants so no math would happen

// let num1 = 3;

// let num3 = num1 * '3';
// console.log(num3);

// //ex of implicit type

const randomNumber = 9;

document.querySelector('.form').addEventListener('sumbit',
function (e) {
    e.preventDefault();
    let value = document
}
)




//4th hour
//data types (7) 
//primitive is data that isnt a object 

//string
let abby = "abby rocks"
console.log(typeof abby);

//number
const ron = 25;
console.log(typeof ron);

//boolean
let hanah = true;
let alex = false;

console.log(hanah);
console.log(alex);

//null
let result = null; //null is the type right now
console.log(typeof result);

//undefined
let name;
console.log(typeof name);

//arrays

const friend1 = 'friend 1';
const friend2 = 'Manny';
const friend3 = 'Alima';

let friends = ['friend 1', 'Manny', 'Alima', 'Zachary', 14, null, true]; 
// ; means line is done

console.log(friends);//this would diplay manny bc its "1" noand this list starts at0123
//8 would



//change value
friends [3] = "Clark";

console.log(friends);

let bestFriend = friends [3];
console.log(bestFriend);

//function declare and invoke

//declaring a function
function ronald(){

}

//invoke a function

function helloE(){
    console.log('hi there manny')
}

hello();
hello();
hello();


//function  parms and arguments

let firstN = 'hanah';

function hi(name){
console.log("hi there " + name)
}
hi("elvis");
hi("ron");
hi(firstN);