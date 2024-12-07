// An interface is a powerful feature that allows you to define a contract for an object's shape.It specifies
// the properties and their types that an object must have to be considered of that particular interface 
// type.Interfaces are primarily used for type-checking during development and don not generate any 
// javascript code at run time.

interface Greet {
    name: string;
    age: number;
}
const greets: Greet = {
    name: "Ifra",
    age: 20
}