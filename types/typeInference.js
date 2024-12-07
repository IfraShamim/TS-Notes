// Type inference in Typescript refers to the ability of the typescript compiler to automatically
// determine and assign types to variables,expressions,and function return values based on their usage
// and context in the code.
// *********** Best Practces For Using Type Inference In Typescript ............
// Use type inference for simple cases where are the assigned value clearly indicates the intended 
// When in doubt,provide explicit type annotations to make your intenstions 
// Avoid relying too heavily on type inference the assigned value is complex or ambigious
// Regularly review and refactor your code to ensure inferred types align with your intentions.
// _________________ Practice _____________________
// Declare a variable message and initialize it with the value "Hello, Typescript!" Infer the type of 
// message using type inference
// let message = "Hello, Typescript!";
// Write a function calculateArea that takes the length width parameters of type number and returns their
// product. Infer the return type of the function using type inference
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(7, 8));
