// if - always checks the condtion; if true, it will run the code inside. if false, it will ignore the code.
// else if - is only valid if a previous 'if' condition is declared. If a prior 'if' condition is met, it will skip checking this code. If the first 'if' condition is false, it will check this code.
// else - is only if a previous 'if' condition is declared. Default action if no condition is true.

let a = 20;
let b = 10;

// this will run the first block
// if(a > b) {
//     console.log("first block");
// } else if (a > 12) {
//     console.log("second block");
// } else {
//     console.log("No condition is true");
// }

// this will run the first and second block
// if(a > b) {
//     console.log("first block");
// } if (a > 12) {
//     console.log("second block");
// } else {
//     console.log("No condition is true");
// }

// this will run the second block
// if(a < b) {
//     console.log("first block");
// } else if (a > 12) {
//     console.log("second block");
// } else {
//     console.log("No condition is true");
// }

// this will run the else block
if(a < b) {
    console.log("first block");
} else if (a < 12) {
    console.log("second block");
} else {
    console.log("No condition is true");
}

// Declare a variable username - stored as a string.
// Declare a variable password - stored as a string.
// Write an if-else statement,
// if the username is incorrect, log incorrect
// if the password is incorrect, log incorrect
// else - both were correct and the user was able to log in

// let username = "admin";
// let password = "password";
// if(username !== "admin") {
//     console.log("Username is incorrect");
// } if(password !== "password") {
//     console.log("Password is incorrect");
// } else {
//     console.log("Both username and password is correct. User is able to login");
// }

// falsy values

let c = 0;
let emptyString = "";
let d; // undefined
let e = null;
let valueFalse = false;
let notANumber = NaN;
let emptyArray = [];

if(emptyArray.length) {
    console.log("here")
} else {
    console.log("falsy values");
}

var user = {
    name: "Bruce", // true
    email: null, // false
    friends: ["Aflred", "Robin"], //true
    address: { // true
        street: "123 wayne manor", // true
        city: "Gotham" // true
    },
    id: 0, // false
    nickname: undefined // false
};