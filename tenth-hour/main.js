// // DOM -- document object module
//     document.body.style.backgroundColor="black";
//     //to change text color
//     document.body.style.color="green";
//     //changing by ID
//     document.getElementById("btn").style.color="pink";

// //assign to a variable
// //const element = document.getElementById("element");
//     let button = document.getElementById('btn');
//     button.style.color ='red';

// // window object -- where we are getting stuff from "document"
// console.log(window);

//     //returns a node object or a node list, basically an array like object (some methods we can use like on array)

//     const btn = document.getElementById('btn');
//     const name = btn.nodeName;
//     const css = btn.style;

//     console.log(btn);
//     console.log(name);
//     console.log(css);


// // select the element or group of elements that we want
//     //decide the effects wanted to apply to selection
//         // getElementById('element');   css id from html

//     let header1 = document.getElementById('title');
//     header1.style.color="white";

//     btn.style.backgroundColor = 'red';

// // getElementByTagName ('tagname')
//     // returns a node lists = array like object
//     // index, length property but not array methods

//     let h1 = document.getElementsByTagName('h1');
// // it basically makes an array so you have to specify by using [] then labeling which one you want to edit
//     // since its the first one then its [0]
//     console.log(h1);
//     h1[0].style.color = "red";

        // const list = document.getElementsByTagName('li');

        // console.log(list);

// list.forEach(function(item){
//     console.log(item); //CANT USE THIS
// })

            // const fruits = [...list]    //spread operator

            // fruits.forEach(function(i){
            //     console.log(i);
            // })



//january 24 

//getElementsByClassName('className);       gives us multiple elements
//node-list = array-like
    //we can get index, length property but not arrays

        // const oranges = document.getElementsByClassName('special');

        // oranges[0].style.color = "orange"
        // console.log(oranges);

//querySelector('any css');     this selects single(first element)
//querySelectorAll('any css');  selects all and ou

    // const oranges = document.querySelector('.special');
    // console.log(oranges);

    //         // const list = document.querySelector('li:lasat-child');
    //         // lastChild.style.color="yellow";


    // const list = document.querySelectorAll('.special');

    // list.forEach(function(item){
    //     console.log(item);
    //     item.style.color = "pink"
    // })

    // // childNodes - returns all childNodes and include whitespace treated as text

    //     const frutas = document.querySelector('#fruits');
    //     console.log(frutas);

    //     // children
    //     const allChildren = frutas.children;
    //     console.log(allChildren);

//parent element
    const heading2 = document.querySelector('h2')
    console.log(heading2.parentElement);        //basically finds what container it is located in

    const bg = heading2.parentElement;
    bg.style.backgroundColor = "orange";


//previousSibling
//nextSibling
//return whitespace

        // const first = document.querySelector('.first');
        // first.style.color = 'orange';

        // const second = first.nextSibling.nextSibling.style.color = "red"

//getAttribute
//setAttribute

        // const first = document.querySelector('.first');
        // const classValue = first.getAttribute('id');
        // console.log(classValue);

        // const link = document.getElementById('link');

        // const slay = link.nextElementSibling;
        // slay.setAttribute('class', 'sucker')

//className -- can be overwritten on accident not slay
//classList -- used to add class to something ig

let first = document.getElementById('one');
let second = document.getElementById('two');

const classValue = first.className
console.log(classValue);

second.classList.add('blah');
second.classList.remove('blah');


//unanymous annd aymous functions, if and else ;

//unanymous function is ()=>{}