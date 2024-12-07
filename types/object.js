var person = {
    name: "Ifra",
    age: 20,
    isStudent: true,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};
console.log(person.address.country);
person.address.country = "Nepal";
console.log(person.address.country);
