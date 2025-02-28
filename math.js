// Addition
// +

console.log(1 + 2 + 3);
const sum = 1 + 2 + 3;
console.log(sum);
let a = 40;
let b = 50;
console.log(a + b);
console.log(a + 60);

// shorthand
a += 20;
// a = a + 20;
console.log(a);

b++;
// increment by 1
// b = b + 1;
console.log(b);

++b;
console.log(b);

// b = 52;
// ++b takes effect immediately
console.log(`Previous value: ${b} and Current value: ${++b}`);

// b = 53;
// b++ takes effect after the line
console.log(`Previous value: ${b} and Current value: ${b++}`);
console.log(b);

console.log("========================================");

// subtraction
console.log(10 - 5 - 10);
a = 30;
b = 15;
console.log(a - b);
console.log(b - a);

// shorthand

b -= 5;
// b = b - 5;
console.log(b);

b--;
console.log(b);

console.log("========================================");

// multiplication
console.log(4 * 8);
a = 100;
b = 10;
console.log(a * b);

// shorthand
a *= 5;
// a = a * 5;
console.log(a);

console.log("========================================");

// division

console.log(10 / 5);
a = 10;
b = 3;
console.log(a / b);

a /= 5;
// a = a / 5;
console.log(a);

// PEMDAS applies
a = 50 + 2 * 2;
console.log(a);

console.log("========================================");

// modulo - returns/gives back the remainder
// 20 divided 3 is 6 remainder 2
console.log(20 % 3);

a = 10;
b = 3;
console.log(a % b);
console.log(10.5 % 5);

console.log("========================================");

// Math.pow
// exponent
// pow() = takes in 2 parameters
// first parameter = base
// second parameter = exponent
console.log(Math.pow(10, 2));
console.log(Math.pow(3, -3));

a = 3;
b = 3;
let c = Math.pow(a,b);
console.log(c);

console.log("========================================");

// Math.round
// follows the rules of rounding up or down numbers
// doesn't work on whole numbers
console.log(Math.round(6.67)); // round up
console.log(Math.round(6.49)); // round down
console.log(Math.round(12)); // it will not work

console.log("========================================");

// Math.floor
// no matter how large your decimal number is, it will always round down
// drops the decimal
console.log(Math.floor(9.999999999)); // 9 
console.log(Math.floor(5.5)); // 5
console.log(Math.floor(4.1)); // 4

console.log("========================================");
// Math.ceil
// no matter how miniscule your decimal number is, it will always round up
// drops the decimal number and adds 1 to the whole number
console.log(Math.ceil(10.01)); // 11
console.log(Math.ceil(12.30)); // 13
console.log(Math.ceil(-12.30)); 

console.log("========================================");

// Math.random
// will give us a number from 0 to 0.9999999999

console.log(Math.random());
// example: we want to randomize a number from 1 to 10
let random = Math.random() * 10;
console.log(Math.ceil(random));

console.log("========================================");

//create a list of items
const shopItems = ['boy bawang', 'doritos', 'chips ahoy', 'oreos'];

//randomize the number from 0 up to 4
let randomNumber = Math.random() * shopItems.length;

//round down the float number into an integer
let newNumber = Math.floor(randomNumber);

//access the item in the array
let randomItem = shopItems[newNumber];

//this should log any of the items in the array
console.log(randomItem);

console.log("========================================");
// coding  challenge

const array = [95.23, 92.56, 98.47];
const newArray = [];

// enter new code
newArray.push(Math.round(array[0]));
newArray.push(Math.floor(array[1]));
newArray.push(Math.ceil(array[2]));

console.log(newArray); // [95, 92, 99];