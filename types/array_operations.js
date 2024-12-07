// Array in Typescript come with in-built methods that allow you to perform common operations.
var fruits = ["Apple", "Mango", "Banana"];
var newUpdatedFruits = fruits.push("Chicko");
console.log(newUpdatedFruits);
console.log(fruits);
var lastData = fruits.pop();
console.log(lastData);
// Using For Loop
for (var i = 0; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i]);
}
// Using For of Loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Using For each method
fruits.forEach(function (currValue) {
    return console.log(currValue);
});
