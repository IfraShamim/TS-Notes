// ******************** Function Declaration ********************
// You can declare a function using a fucntion keyword, followed by the function name, 
// a list of parameters enclosed in paranthesis, and a return type.
// The function bogy contains the code that will be executed when the function is called.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ******************** Function Invocation ********************
// To execute a function,you simply invoke it by using its name followed by paranthesis.
// You can provide arguments (actual values) for the parameters defined in the function declaration.
// function greet(name:string,id:number){
//     console.log(`Welcome, ${name} and your id is ${id}!`);
// }
// greet("Ifra",61);
// _________________ Fat Arrow Function _________________
// const greet = (name:string,id:number):string => {
//     return `Welcome, ${name} and your id is ${id}!`;
// }
// const myGreet = greet("Ifra",61);
// console.log(myGreet);
// _________________ Practice _________________
// Write a function is called isPalindrome that takes a string as a parameter and returns true 
// if the string is a Palindrome (reads the same forwards and backwards), and false otherwise.
// const isPalindrome = (palin:string):boolean =>{
// let myPalin = palin.split("").reverse().join("");
// return myPalin === palin
// }
// console.log(isPalindrome("12321"));
// _________________ Practice _________________
// Calculate a function called calculateAverage that takes an array of numbers as a parameter and return
// the average of numbers.
// function calculateAverage(...nums:number[]):number{
// const allNumbers = [...nums];
// const sum = allNumbers.reduce((pre , curr) => pre + curr,0 );
// return sum / allNumbers.length;
// }
// console.log(calculateAverage(3,6,8,9));
// Write a function called findMaxValue that takes an array of numbers as a parameter and returns the
// maximum value in the array
var findMaxValue = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var allNumbers = __spreadArray([], nums, true);
    var maxValue = allNumbers[0];
    for (var i = 1; i < allNumbers.length; i++) {
        if (allNumbers[i] > maxValue) {
            maxValue = allNumbers[i];
        }
    }
    return maxValue;
};
console.log(findMaxValue(2, 3, 4, 5, 6, 7));
