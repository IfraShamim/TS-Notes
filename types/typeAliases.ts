// In Typescript , a type aliases is a way to give a name to a specific type or combination of types 
// It allows you to create a custom name for a type, making it easier to resuse and refer to the same 
// type in different parts of your code.Type aliases provide better readability, organization and
// abstraction of complex types 

// type Person1 = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     class?:string,
//     address: {
//         city: string;
//         country: string;
//     }
// }
// const person1:Person1 = {
//     name: "Ifra",
//     age: 20,
//     isStudent: true,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }
// console.log(person1.address);

// type Product1 = {
//     name:string;
//     price:number;
//     quantity:number;
// }
// const product1:Product1 = {
//     name: "Laptop",
//     price: 1000,
//     quantity: 5
// }

// const calculateTotalPrice = (product1:Product1) => {
//   return product1.price * product1.quantity;
// }
// console.log(calculateTotalPrice(product1));
