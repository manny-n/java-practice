// pwerful awway methof

// forEach, filter, find, reduce

//iterate over array -- no for loop required

//accept callback function as an argument, calls callback again each item in a  array. reference item in the callmback parameter

// const people = [
//     {
//     name: 'elvis',
//     age: 34,
//     job: 'developer'
//     },
//     {
//     name: 'imani',
//     age: 12,
//     job: 'bestie'
//     },
//     {
//     name: 'manny',
//     age: 15,
//     job: 'loser'
//     }
// ]

// function showPerson(person) {
//     console.log(person);
// }

// people.forEach(showPerson);     //dont invoke function

// people.forEach(function(item) {
//     console.log(item.name);
// })

// nap -- most popular and powerful
// does return a new array
// does not change size of origin array
//uses values from original array wehn making a new one

                // use {} when wanting to define an object

const products = [
    {
        id: 1, product: 'shoes', make: 'nike', price: 22.95
    },
    {
        id: 2, product: 'pants', make: 'adidas', price: 44.95
    },
    {
        id: 3, product: 'socks', make: 'puma', price: 3.99
    },
    {
        id: 4, product: 'socks', make: 'adidas', price: 5.99
    }
];

                                //callback function
const singleProduct = products.map(function(item){
    return item.price;
});
console.log(singleProduct);

// ((p)=>{}) this is another form of callback function

const newProducts = products.map((p)=>{
    return {
        productMake: p.make,
        productPrice: p.price + 1.00
    }
});
console.log(newProducts);


//returning back to html
const makes = products.map((hs)=> {
    return `<div>Make: ${hs.make}</div>
    <div>Price: ${hs.price}</div>`
});
console.log(makes);


// join('')makes it all together and removes the commas
document.body.innerHTML = makes.join('');


// filter methods
// does return a new array 
// can manipulate the size of new array
// returns based on condition (< > <= >= )

    //const cheapShoes = products.filter(function(s){
    //     return s.price <= 20
    // });
    // console.log(cheapShoes);


    // //looking for any products by adidas
    // const adidas = products.filter((a)=>{
    //     return a.make === 'adidas'
    // });
    // console.log(adidas);

// find
// returns objects
// returns first match found, if no match then it is undefined
// great for getting unique value

    // const productID = products.find(function(p){
    //     return p.id === 2;
    // });
    // console.log(productID.price);

// reduce 
// iterates, callback function
// reduces to a single value -- number, array, object
// 1st parameter ('acc' -- accumulator) total of all calculations
// 2nd parameter ('curr' -- current) current iteration / value

const cost = products.reduce (function(acc, currItem){
    console.log(`Total: ${acc}`);
    console.log(`Cost Current Item: ${currItem.price}`);
    acc += currItem.price;
    
    return acc; 
}, 0);

console.log(`cost of everything is $ ${cost}`);

// math object
// standard built in objects

// rounding up 

const num1 = 4.56789;
const result = Math.ceil(num1);

console.log(result);

//rounding down

const num2 = 4.3456;
const result2 = Math.floor(num2);

console.log(result2);

// square root

const num3 = 4;
const result3 = Math.sqrt(num3);

console.log(result3);

// PI 
const result4 = Math.PI;
console.log(result4);

// min and max work the same way
const result5 = Math.min(3,4,5,6);
console.log(result5);
const result6 = Math.max(3,4,5,6);
console.log(result6);

// random numbers

const result7 = Math.ceil(Math.random() *10);
console.log(result7);

// date global object

const months = [
    'January',
    'February',
    'March',
]
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday'
]

const date = new Date();
const month = date.getMonth();
let day = date.getDay();
console.log(months[month]);
console.log(days[day]);

console.log(date.getFullYear());
console.log(date.getDate());

const webDate = `Hello peeps, welcome! Today is ${days[day]} ${months[month]} ${date.getDate()}, ${date.getFullYear()}`;

document.body.innerHTML = webDate;

const webDate2 = `hello peeps, welcome! Today is ${date}`

document.body.innerHTML = webDate2