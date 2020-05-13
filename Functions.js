// A function is a set of instructions 

// function addNumbers(){


// }

// //


// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addNumbers(12, 19);

// function addNumbers(num1, num2) { //follows order of call 
//     console.log(num1 + num2);
// }

// addNumbers(12, 19);

// when you call a function the function needs to be defined above the call

// a function does not need parameteres

// function sayHello(){
//     console.log("Hello");
// }

// sayHello();


// function multiplyByTwo (num) {
//     return num * 2;

// }

// console.log(multiplyByTwo(10));

function getMe(){
    let me = {
    fistName: "Damon",
    lastName: "Mcmahon",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;

    }
    }
    return me;

    


    