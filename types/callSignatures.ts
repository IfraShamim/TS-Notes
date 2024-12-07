// The function call signature refers to the declaration or definition of a function , which 
// includes the functions name, parameters and return type. It defines the structure and type infromation
// of a function withoud including the functions implementation or body.

// Very Important => call signatures are typically used inside object type notations to describe the shape 
// of functions within object types.

type Student = {
    name: string;
    age: number;
    gender?: string;
    // Call Signatueres
    greet: (country:string) => string
}
const student1: Student = {
    name: "Ifra",
    age: 20,
    greet: ((country):string => `Welcome, I'm from ${country}`)
}
const student2: Student = {
    name: "Nisha",
    age: 18,
    greet: ((country):string => `Welcome, I'm from ${country}`)
}
const introduction: (student1: Student) => string = (student2: Student): string => {
const {name,age} = student1;
return `Welcome, ${name}, & your age is ${age}.`
}
console.log(introduction(student1));
console.log(student1.greet("Karachi"));
console.log(student2.greet("London"));


