// Greater than
// >
// compares 2 numbers and returns a boolean value

let greater = 5 > 10;
console.log(greater); // false
console.log(10 > 5); // true

let a = 50;
let b = 30;
console.log(b > a); // false

console.log("========================================");

// Less than
// <

console.log(b < a); // true
console.log(a < 100); // true
console.log(100 < 100); // false

console.log("========================================");

// Greater than or equal to
// >=

console.log(40 >= 40); // true 
console.log(41 >= 40); // true
console.log(39 >= 40); // false

console.log("========================================");

// Less than or equal to
// <=

console.log(40 <= 40); // true
console.log(41 <= 40); // false
console.log(39 <= 40); // true

console.log("========================================");
// Equality
// == - checks the value regardless of data type
// === - alse checks the data type

console.log(4 == 4); // true
console.log(4 == 5); // false
console.log(4 == '4'); // true - number to string

console.log(4 === '4'); // false

let str1 = "password123";
let str2 = "password123";
console.log(str1 === str2); // true
console.log(str1 == str2); // true

console.log("========================================");
// Not operator
// !
// negates the value of the variable/value
// != - checks the value regardless of data type and negates the result
// !== - also checks the data type and negates the result

console.log(!false); // true

let c = false;
console.log(!c); // true

console.log('cat' === 'cat'); // true
console.log('cat' !== 'cat'); // false
console.log(5 !== '5'); // true - ===
console.log(5 != '5'); // false - ==

console.log(!(4 > 9)); // true