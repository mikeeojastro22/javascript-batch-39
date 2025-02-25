console.log("Hello world!");

// Ctrl + /

// keywords
// var/let/const variable-name = value;
// = - equal symbol is the assignment operator. It means that we're assigning a value to the variable
// "John" - string/value

// var - indicator that the next keyword is a variable
// Declaration
var name = "John";
console.log(name);

// Reassignment - reassigning a new value to an already existing variable
name = "Mikee";
console.log(name);

// possible values
var age = 25; // number
var height = 155.5; // number
var firstname = "Anthony John"; // string - double quotes
var lastname = 'Garcia'; // string - single quotes
var fullname = `Anthony John Garcia`; // string - backtick

// camel case
var isLegal = true; // boolean
var isNotLegal = false; // boolean

// {} - code block - enclosed by curly braces
// if - it will only run if the condition is true
if(isLegal) {
    console.log("The person is of right age.");
}

if(isNotLegal) {
    console.log("The person is not of age");
}

var num1 = 50;
var num2 = "25";
console.log(num1 + num2);

// Differentiating var and let

// var doesn't mind the scope of the block
var temp = 10; // block A

if(true){
    var temp = 5; // block B
}

// gets the latest value of temp
console.log(temp); // block A

// let - it minds the scope of the block

let second = 30; // block A

if(true){
    let second = 40; // block B
    console.log(second); // block B
}

console.log(second); // block A

// const - constant variable - you cannot reassign a value to it. It is also scope based.

const population = 1000;

if(true){
    const population = 1001;
    console.log(population);
}

console.log(population);

// Coding challenge # 1
let bookCount = 0;

function increment(){
    bookCount +=1;
}
increment();

// Coding challenge # 2
let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar'];

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth'];
}
replaceBooks();

// Coding challenge # 3
let firstName;
function textCustomer() {
    {
        firstName = 'Molly';
    }
    console.log('Hi ' + firstName + ', your book is now in');
}
textCustomer();