// In Typescript, Tuples are a data structure that allows you to store a fixed size collection of elements
// of different types.They are similar to arrays,but with a key difference: the types of elements in a tuple
// are fixed and declared at a time of creation,whereas arrays can hold elements of the same type
// and their size can vary.

// Defining a tuple type for personal information
// In Tuples , order is matter...
type PersonalInfo = readonly [string, number, boolean];

const displayPersonInfo = (person: PersonalInfo) => {
    const [name, age, hasDrivingLiscense] = person;
    console.log(`Name: ${name}, Age: ${age}, Has Driving License: ${hasDrivingLiscense ? "Yes" : "No"}`);
};

const person1: PersonalInfo = ["Ifra", 29, true];
const person2: PersonalInfo = ["Nisha", 15, false]; // Changed to false for testing.

displayPersonInfo(person1);
displayPersonInfo(person2);

