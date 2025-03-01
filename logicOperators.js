// logic operators - if we want to combine conditions

// or
// Symbol: ||
// At least one must be true for it to be true

let a = 5;
let b = 10;
let c = 15;

//   false      true       false       false
if( (a > b) || (b < c) || (c < a) || (b == c) ){
    console.log("At least one of the statement is true");
} else {
    console.log("All statements are false");
}

// and
// Symbol: &&
// All must be true for it to be true

//   true         true      true       true
if( (a == 5) && (b < c) && (c > a) && (b != c) ){
    console.log("All are true");
} else {
    console.log("At least one is false");
}

// combination
//    true        false         true
if( (a == 5) || (b == 15) && (c == 15) ){
    console.log("Combination will succeed");
} else {
    console.log("Fail");
}

// not
// Symbol: !
// negates the expression

//  !false = true
if(!(a == c)) {
    console.log("negated");
} else {
    console.log("not negated");
}