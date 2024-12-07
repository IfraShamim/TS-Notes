// *************** Boolean Type *******************
// In Typescript, the boolean type represents a value that can be either true or false. It is one of 
// the basic primitives type in the language
// let isMyNameIfra:boolean = true;
// let hasStarted:boolean = false;
// *************** Check Even Number *******************
// Write a typescript function called isEven that takes a number as a parameter and returns true if the 
// number is even and false otherwise 
// function isEven(num: number):boolean {
//     if (num % 2 === 0) {
//         return true;     
//     } else {
//         return false;
//     }
// }
// console.log(isEven(4));
// Write a typescript function called isDivisibleBy4And8 that takes a number as a parameter and returns true
// if the number is divisible by both 4 and 8
// function isDivisibleBy4And8(num: number):boolean{
// if(num % 4 === 0 && num % 8 === 0){
//     return true 
// }
// return false;
// }
// console.log(isDivisibleBy4And8(16));
// *************** BigInt Type *******************
// It is a built-in type that allows you to work with numbers that are larger than the range supported
// by the regular number type
// BigInt literals are written by appending the n suffix to an integer literal
// In Js we can't read the whole numbers beyond 2 raise to power 53
// let maxNumber = Number.MAX_SAFE_INTEGER;
var bigNumber = 9007199254740992n;
console.log(bigNumber);
var anotherBigNumber = BigInt(9007199254740992);
