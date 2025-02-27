// built-in functions wherein it can be used by arrays ONLY
// functions already available to us

// slice()
//                    0           1       2         3         4
let kpopGroups = ["Seventeen", "Twice", "BTS", "BlackPink", "EXO"];

// parameters - what we pass to the function
// slice(first, second)
// first parameter - starting index whre we want to slice
// second parameter - end index - 1
// slice returns an array
let slicedGroup = kpopGroups.slice(0, 3);
console.log(slicedGroup);
console.log(kpopGroups);

let twoGroups = kpopGroups.slice(2, 4);
console.log(twoGroups);

// push()
// accepts a new entry as parameter
// adds an element at the end of an array
// alters the array itself
kpopGroups.push("2NE1");
console.log(kpopGroups);

kpopGroups.push("NCT", "Bigbang");
console.log(kpopGroups);

// unshift()
// adds an element at the start of an array
// accepts a new entry as parameter
// alters the array itself
kpopGroups.unshift("Apink");
console.log(kpopGroups);

// Coding challenge
let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
]

// gardenPlants.unshift({
//     name: 'sampaguita',
//     origin: 'Asia'
// });

// console.log(gardenPlants);

// let newFlower = {
//     name: 'cherry blossoms',
//     origin: 'Asia'
// }
// gardenPlants.unshift(newFlower);
// console.log(gardenPlants);

// pop()
// removes an element at the end of an existing array
// no parameters
// mutates/alters the array itself
// returns the removed element
let removedGroup = kpopGroups.pop();
console.log(`Removed group: ${removedGroup}`);
console.log(kpopGroups);

kpopGroups.pop();
console.log(kpopGroups);

// shift()
// removes an element at the start of an existing array
// no parameters
// mutates/alters the array itself
// returns the removed element
removedGroup = kpopGroups.shift();
console.log(`Removed group: ${removedGroup}`);
console.log(kpopGroups);

kpopGroups.shift();
console.log(kpopGroups);