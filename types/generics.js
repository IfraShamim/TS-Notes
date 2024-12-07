// Generics in Typescript allows you to create reusable components or functions that can work 
// with multiple data types.
// function logAndReturn(value:number|string):number|string{
//     console.log(value);
//     return value;
// }
// const numberResult:string|number = logAndReturn(42);
// const stringResult:string|number = logAndReturn("Ifra");
// console.log(numberResult);
// console.log(stringResult);
// Generic FUnction To Log & Return Input Value
function logAndReturn(value) {
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Ifra");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
