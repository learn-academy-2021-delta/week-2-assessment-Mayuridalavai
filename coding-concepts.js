// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

//var cohort = "Delta 2021"
//console.log(cohort.split(""))

// a) Your answer:['D', 'e' 'l', 't', 'a', ' ', '2', '0', '2', '1']
// b) Verify and explain: 
//I verified the output in the terminal using node command
// my answer was correct
// split is an accessor used to convert string in to an array


// --------------------2) What will this log?

//const greeter = (name) => {
 // `Hello, ${name}!`
//}
 //console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain:
//I verified the output in the terminal using node command
// my answer was correct
// In functions return indicates output of the function. 
// if we do not return, output will be undefined


// --------------------3) What will this log?

//var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:
//I verified the output in the terminal using node command
// my answer was correct
// map function iterates an array and give new array (values are multiply by 2)
// with same lenth
// Here arrow Function is used so no need return function for output


// --------------------4) What will this log?

//var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
 //console.log(oddsOnly)

// a) Your answer: 12, 14
// b) Verify and explain:
//I verified the output in the terminal using node command
// my answer was correct
// In this code command (value %2 === 0) gives output even numbers 
// if we want odd numbers,the command is (value % 2 !== 0)


// --------------------5) What will this log?

//class Learn {
// constructor(name){
//    this.student = name,
//     this.cohort = "Delta",
//     this.year = 2021
//   }
// }
// var learnStudent = new Learn("George")
//  console.log(learnStudent)

// a) Your answer: Learn { student: George, cohort: Delta, year: 2021 }
// b) Verify and explain:
//I verified the output in the terminal using node command
// my answer was correct and I missed single quotation for string Geroge and Delta
// In this code Learn is a class and constructor is used to create and initialize objects
// new is used to create new instance of a class so In place of name it creates "George"
