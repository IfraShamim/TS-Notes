// In Typescript , a type aliases is a way to give a name to a specific type or combination of types 
// It allows you to create a custom name for a type, making it easier to resuse and refer to the same 
// type in different parts of your code.Type aliases provide better readability, organization and
// abstraction of complex types 
var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
var calculateTotalPrice = function (product1) {
    return product1.price * product1.quantity;
};
console.log(calculateTotalPrice(product1));
