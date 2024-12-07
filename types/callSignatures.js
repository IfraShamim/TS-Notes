// The function call signature refers to the declaration or definition of a function , which 
// includes the functions name, parameters and return type. It defines the structure and type infromation
// of a function withoud including the functions implementation or body.
var student1 = {
    name: "Ifra",
    age: 20,
    greet: (function (country) { return "Welcome, I'm from ".concat(country); })
};
var student2 = {
    name: "Nisha",
    age: 18,
    greet: (function (country) { return "Welcome, I'm from ".concat(country); })
};
var introduction = function (student2) {
    var name = student1.name, age = student1.age;
    return "Welcome, ".concat(name, ", & your age is ").concat(age, ".");
};
console.log(introduction(student1));
console.log(student1.greet("Karachi"));
console.log(student2.greet("London"));
