// question no1 
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Prompt the user for input
let number = parseInt(prompt("Enter a number to check if it is prime:"));

if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

// question no 1
let multiArray = [[]];
// // question no 2
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// question no 3
for(let i = 0; i<= 10;i++){
    console.log(i);
}

// question no 4
var array = ["apple","banana","mango","orange","stabewry"]
for(var i = 0;  i< array.length;i++){
    console.log(array[i]);
}
// question no 5
for(let i = 1;i<=15;i++){
    console.log(i);
}
// question no 6
for(let i = 15; i > 0; i--){
    console.log(i);
}
// question no 7
let even = [];
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// question no 8
let odd = [];
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}
// question no 9
let series = [];
for (let i = 2; i <= 20; i += 2) {
    console.log(i + 'k');
}
// question no 10
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem(item) {
    if (A.includes(item.toLowerCase())) {
        console.log(item + " is found in the list.");
    } else {
        console.log(item + " is not found in the list.");
    }
}
// question no 11
let userInput = prompt("Enter an item to search:");
searchItem(userInput);
let a = [24, 53, 78, 91, 12];
function findLargestNumber(array) {
    let largest = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]; 
        }
    }
    return largest;
}

let largestNumber = findLargestNumber(A);
console.log("The largest number in the array is: " + largestNumber);
// question no 12
function printMultiplesOf5() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
printMultiplesOf5();