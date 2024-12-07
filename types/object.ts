const person: {
    name: string;
    age: number,
    isStudent: boolean,
    address: {
        city: string;
        country: string
    },
} = {
    name: "Ifra",
    age: 20,
    isStudent: true,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}
console.log(person.address.country);
person.address.country = "Nepal";
// Its not valid in typescript because type number is not assignable to type string
// person.address.country = 123;
console.log(person.address.country);

