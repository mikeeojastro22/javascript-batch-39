// function - reusable code
// It's only executed once the function is called
// It has a name and we can call that name to execute the function

// function functionName
function sayHi() {
    // function body
    console.log("Hi!");
    let a = 20 + 30;
    if(a == 30){
        console.log("It entered here");
    } else {
        console.log("Else statement");
    }
}

// function call
sayHi();

// return statement
// returns a value

function returnSample() {
    let helloWorld = "Hello world!";
    helloWorld = "Hello Philippines!";
    return helloWorld;
}

// first way - immediately call in console.log
console.log(returnSample());

// second way - assign it to a variable
let temp = returnSample();
console.log(temp);