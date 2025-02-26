// strings
let firstname = "Barbara";
let lastname = 'Sindak';
let middlename = `Anne`;

// template literals
let fullname = `${firstname} ${middlename} ${lastname} Jr.`;
console.log(fullname);

// numbers
let num1 = 40;
let num2 = 30.5;
let sum = num1 + num2 + 10;
console.log(sum);
console.log(num1 + num2);

// boolean
let isFilipino = true;
let isForeigner = false;

if(isFilipino){
    console.log("Answer additional questions");
}

if(isForeigner){
    console.log("Skip to end");
}

// arrays
// const random = ["Jean", 53, true];
// console.log(random);

const studentNames = ["Victor", "Amanda", "John", "Dom"];
console.log(studentNames);
const grades = [85, 90, 100, 93, 89];
console.log(grades);

// Property of an array - length
console.log(`Number of students: ${studentNames.length}`);
console.log(grades.length);

// Accessing an element
                  //    0              1              2           3      
const projects = ["Tribute Page", "Survey Form", "Chessboard", "Product Landing Page"];

console.log(projects[2]);
console.log(projects[0]);
console.log(projects[4]); // undefined
console.log(projects[-1]); // undefined
console.log(projects[projects.length - 1]);

let thirdProject = projects[2];
console.log(thirdProject);

console.log(projects);
// Reassignment of an element in the array
// Array at an index = new value
projects[2] = "Chessboard Flex and Grid";
console.log(projects);

// objects - describe real life objects
// key: value pair
// objects have details called "properties"

const laptop = {
    model: "Lenovo",
    price: 40000,
    ram: "16 GB",
    inStock: true,
    storesAvailable: ["SM Manila", "Robinson's Manila", "SM MOA"]
}

console.log(laptop);
// accessing elements

// first - dot notation
// you should know which key to access
console.log(laptop.model);
console.log(laptop.storesAvailable);

// second - bracket notation
// object["property"]
// dynamic access
let laptopProperty = "ram";
console.log(laptop[laptopProperty]);

laptopProperty = "price";
console.log(laptop[laptopProperty]);

// reassignment
laptop.price = 45000;
console.log(laptop);

laptop["price"] = 50000;
console.log(laptop);