// ASSESSMENT 2: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { words, upperCase } = require("lodash")
const { test } = require("picomatch")
const { describe, string } = require("yargs")

//const { expect } = require("@jest/globals")
//const expectExport = require("expect")
//const { capitalize } = require("lodash")
//const { test } = require("picomatch")
//const { describe, array } = require("yargs")

//const { expect } = require("@jest/globals")
//const { test } = require("picomatch")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//var num1 = 15
// Expected output: "15 is divisible by three"
//var num2 = 0
// Expected output: "0 is divisible by three"
//var num3 = -7
// Expected output: "-7 is not divisible by three"

//describe method that lists the name of the function
//test method  describes what function does
//an expect method calls the function to test arguments
describe("divisibleNum",() => {
    test('given three numbers are divisible by three or not',() => {
    expect(num1 % 3 ).toBe(0)
    expect(num2 % 3 ).toBe(0)
    expect(num3 % 3 ).not.toBe(0)
})
})

// b) Create the function that makes the test pass.

// declare a function named divisibleNum
//Function should take in two arguments
//conditionals to check if the numbers are multiplied by 3 are not
//return false
//otherwise true
 const divisibleNum = (num1, num2) => {
     if(num1 % 3 === 0 && num2 % 3 === 0){
    return " num is divisible by 3"
 } 
  else {
    return "not divible by 3"
  }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe method that lists the name of the function
test method  describes what function does
an expect method calls the function to test arguments
describe("Uppercase",() => {
test('Takes an array of words and returns an array with all the words capitalized ',() => { 
       expect(randomNouns1).toEqual(upperCase)
        expect(randomNouns2).toEqual(upperCase)
    })
})


// b) Create the function that makes the test pass.

//declare a function named capitalizeletter
//first change first letter string in to uppercase 
//declare variable 
//for loop to check the array 
//return array 

const Uppercase = (array1) => {
    var array1 = str.split(' ');
    var newarray1 = [];
    for(let i= 0; i < array1.length; i++){
       newarray1.push(array1[i].charAt(0).toUppercase()+array1[i].slice(1));
    }
    
    return newarray1.join(' ');
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//describe method that lists the name of the function
//test method  describes what function does
//an expect method calls the function to test arguments
describe("firstVowel",() => {
    test('index of the first vowel in a string',() =>{
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3).toEqual(2)
    })

})



// b) Create the function that makes the test pass.
//declare a function named firstVowel
//first change first letter string in to uppercase 
//declare variable 
//for loop to check the vowel in an array
// return value

const firstVowel = (str1) => {
   var vowelTester='aeiouAEIOU';
   var vcount=0;
   for(let i=0; i<str1.length; i++){
       if(vowelTester.indexOf(str1[i] !== -1)
       {
           vcount += 1;
        }
        return vcount;
   }

    console.log(firstVowel(vowelTester1))
    console.log(firstVowel(vowelTester2))
    console.log(firstVowel(vowelTester3))

}
