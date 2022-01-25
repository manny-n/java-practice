// unary operator   -- typeof

let text = 'some text';

console.log(typeof text);

// binary operator  -- assignment

let text1 = 'some text';

// ternary operator
    //condition ? (runs if true) : (runs if false)
// value ? console.log(`it is true`) : console.log(`it is flase`);

let value = true;

if(value) {
    console.log(`it is true`);
}
else {
    console.log(`it is false`);
}

// global scope v local scope
// any variable that is outside of a cod block {function, {}, or it can be if statements} said to be in global scope


//local scope -- inside of {} functons and 'if' statements 
//cant be accessed from outside of code blocks
//if -- NOT VAR

let v = 2;
function manny(){
    let m = 3;
}

let fname = 'elvis';
fname = 'ron';

function calc(){
    fname = 'orange';
    age = 22;
    console.log(`first ${fname}`);
    function inner(){
        // fname = 'imani';
        console.log(`this is from inner function ${fname}`);
    }
    inner()
}
calc();
console.log(age);

{
    //code block {}
}

// js does variable look up first local then global then not defined

    // const globalNumber = 5;

    // function add(num1, num2){
    //     const globalNumber = 20;
    //     let total = num1 + num2 + globalNumber;
    //     // console.log(result);
    //     function mult(){
    //         const globalNumber = 2;
    //         let result = total * globalNumber
    //     }
    //     mult()
    //     return result;
    // }
    // add(2, 6);


// callback function, higher order function,
//functions are first class objects/citizens

//functions are first class objects - stored in a variable (expressions) [assed as an argument to another function, retutrn from the unction (closure)
// higher order function - accepts another function as an argument or return another function as a result

//call back function - passed to another function as an argument and executed inside that function

//callback function
function greetMorning(name){
    const myName = 'Manny'
    console.log(`good morning ${name}, my name is ${myName}`);
}
greetMorning('Hanah');
greetMorning('Abby');

function greetAfternoon(name){
    const myName = 'Manny'
    console.log(`good afternoon ${name}, my name is Manny`);
}
greetAfternoon('Hanah')

function morning(name){
    return `good morning ${name.toUpperCase()}`
}
morning('hanah')

function afternoon(name){
    return `good afternoon ${name.repeat(3)}`
}



//higher order funtion
function greet(name, cb){
    const myName = "manny";
    console.log(`${cb(name)}, my name is ${myName}`);
}
greet('hanah', morning);    //dont need to invoke

greet('imani ', afternoon);

//powerful array methods - they take cb functions
let friends = ['hanah', 'imani', 'ron', 'manny'];

    //show all my friends
            // for( let i=0; i< friends.length; i++) {
            //     console.log(friends[i]);
            // }

let people =[
    {
        name: 'manny',
        age: 16,
        position: 'student'
    },
    {
        name: 'imani',
        age: 17,
        position: 'bestie'
    },
    {
        name: 'hanah',
        age: 17,
        position: 'the best'
    },
    {
        name: 'abby',
        age: 18,
        position: 'queen'
    },
]

function showPerson(person){
    console.log(person);
}
//forEach
//doesnt return new array
people.forEach(showPerson);

//anonymous function
people.forEach(function(item) {
    console.log(item.age);
}) 