// In Typescript, Tuples are a data structure that allows you to store a fixed size collection of elements
// of different types.They are similar to arrays,but with a key difference: the types of elements in a tuple
// are fixed and declared at a time of creation,whereas arrays can hold elements of the same type
// and their size can vary.
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDrivingLiscense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Has Driving License: ").concat(hasDrivingLiscense ? "Yes" : "No"));
};
var person1 = ["Ifra", 29, true];
var person2 = ["Nisha", 15, false]; // Changed to false for testing.
displayPersonInfo(person1);
displayPersonInfo(person2);
