// ==, ===
    // = assigns the value 
    // == checks only if the value is equal
    // === cehcks if the value is equal and type is the same
    // != checks if value is the same
    // !== checks if both value is equal and type is the same

    // const num1 = 10;
    // const num2 = "10";

    // const result = num1 * num2; //would show up as 100 since it overrides string

    // console.log(result);

    // const value = num1 == num2;
    // const value2 = num1 === num2;
    //     // these display true/false


    // console.log(value);
    // console.log(value2);

// logical operators
    // || this means OR
    // && this means AND
    // ! this means NOT

    // with OR, you just need ONE condition to be true
    // with AND, you need both conditions to be true

        // let fname = 'manny';
        // let age = 34; 

        // if(fname === 'syd' || age === 34){
        //     console.log('hello bestie');
        // }
        // else {
        //     console.log('your values are not matching');
        // }

// switch statements
    // dice value 1-6

            //     const dice = 1;

            // switch(dice){
            //     case 1:
            //         console.log('you rolled 1');
            //         break
            //     case 2:
            //         console.log('you rolled 2');
            //         break
            //     case 3:
            //         console.log('you rolled 3');
            //         break
            //     default:
            //         console.log('you need to roll again');
// }

        // if(dice === 1){
        //     console.log('you rolled 1');
        // }
        // else if(dice === 2){
        //     console.log('you rolled 2');
        // }
        // else{
        //     console.log('you need to roll again');
        // }


// LOOPS
    // repeatedly run a block of code while condition is true

        // while loop 
            // let amount = 10;
            // while(amount > 0){
            //     console.log("i have " + amount + " dollars and I am gonna go shopping");
            //     amount--
            // }

        // do while loop
        // code block goes first then condition is second
        // runs at least one

            // let money = 12;
            // do{
            //     console.log('you have ' + money + ' dollars');
            //     money++
            // }
            // while(money < 10);

        // for loops
                    // let i; 
                    // for(i = 0; i < 10; i ++){
                    //     console.log('and number is ' + i);
                    // }

        // using variable
        for(let number = 11; number >= 0; number --){
            console.log('and number is ' + number);
        }