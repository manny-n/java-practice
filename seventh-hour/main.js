//arrays and for loops 
//combine each name with last name

let fnames = ['anna', 'elvis', 'joe', 'manny'];
let lname = 'Smith';

let fullName = [];

//for loop
for(let i=0; i < fnames.length; i++) {
    console.log(i);
    console.log(fnames[i]);
    const names = `${fnames[i]} ${lname}`


    fullName.push(names)
}
console.log(fnames);
console.log(fullName);

//funtion, return, arrays, for loops
//end of month expenses

const gas = [20, 40, 100];
const food = [10 ,45, 50];

function calcTotal(arr) {
    let total = 0;

    for( let i=0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);
const randomNumbers = calcTotal('string')

console.log({
    gas: gasTotal,
    food: foodTotal,
    randomNumbers: randomNumbers
});

///reference vs value  
    //primitive: fundamental data type that cant be broken down to more simple data type
       //primitive data types: (string, number, symbol, boolean, undefined, null)







let num1 = 1;
let num2 = num1;

// num2 = 7;

console.log(`first number is ${num1} `);
console.log(`second number is ${num2}`);

//when assigning non-primitive data type value to a variable is done by refernce so any changes will affect all those references

let person = {fname: 'elvis'};
let person2 = person;

person2.fname = 'dave';

console.log(`first person is ${person.fname}`);
console.log(`second person is ${person2.fname}`);

//null and undefined
    //both represent 'no value'
    //undefined     JS cant find value for this thing
    //null is set by dev

let number = 22 + null;     // 22 + 0
let number2 = 22 + undefined;   //not a number or NaN

//truthy and falsy 
    // "", '', ``, 0, -0, NaN, false, null, undefined

    const bool1 = true;
    const bool2 = 2 >1; 

    const text = '';

    if(text) {
        console.log(`hey the value is truthy`);
    }else {
        console.log(`hey its falsy`);
    }

    