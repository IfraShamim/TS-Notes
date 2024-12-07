// Union types allows you to specify that a variable can hold values of multiple types.You use the 
// pipe (|) symbol to define a union type.

// In Typescript, When using a union type , it is essential to ensure that at least on of the types 
// in the union includes all the required properties.Failure to do so will result in a type error
// during compilation.

// const inputValue = (value: string | number | boolean): void => {
//     console.log(`Value is: ${value}`);
// };

// inputValue(55);       // number
// inputValue(true);     // boolean
// inputValue("Ifra");   // string

// const userInput = (value: string | number): void => {
//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     }
//     else{
//         console.log(value*2);        
//     }
// };
// userInput(55);       // number
// userInput("ifra");

// Intersection type allows you to combine multiple types into a single type.You use the & (ampersand)
// symbol to define an intersection type.

// type Person = {
//     name:string,
//     age:number
// }
// type Employee = {
//     emp_id:number,
//     departement:string
// }
// type EmployeeDetails = Person & Employee;

// const employee:EmployeeDetails = {
//     name: "Ifra",
//     age: 20,
//     emp_id: 61,
//     departement: "IT"
// }
// console.log(employee);
