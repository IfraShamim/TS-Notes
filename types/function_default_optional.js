// ------------- Optional And Default Parameters -------------
// Typescript allows you to define optional and default parameters in functions.
// Optional Parameters are denoted by appending a ? symbol after the prameter name 
// and default parameters are specified by providing a default value in the parameter declaration 
// ------------- Default Parameters ------------- // 
// const greet = (name:string , id:number = 1):string => {
// return `Hello, ${name} and your id is ${id}.`
// }
// console.log(greet("Ifra"));
// ------------- Optional Parameters ------------- // 
var greet = function (name, id) {
    if (id) {
        return "Hello, ".concat(name, " and your id is ").concat(id, ".");
    }
    else {
        return "Hello, ".concat(name, ".");
    }
};
console.log(greet("Ifra", 16));
