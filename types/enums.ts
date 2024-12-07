// ------------- Enums in Typescript -------------
// Enums in typescript are commony used when you want to represent a set of related values and choose one
// value from multiple options.Enums provide a convenient way to define a set of named values and associate 
// them with specific meanings.

// In Typescript, when enum constants are not explicitly assigned numeric values, They are automatically
// assigned incremental numeric values starting from 0.The default numeric value for the first enum 
// constant is 0.and subsequent enum constants receive values incremented by 1.

// In TypeScript, an enum is a data type that allows you to define a set of named constants. It helps you create more expressive 
// and readable code by giving meaningful names to specific values.

// user1 = login => normal user 
// user2 = login => admin user 

// enum Roles {
//     admin = "admin",
//     user = "user"
// }
// type LoginDetails = {
//     name?:string;
//     email:string;
//     password:string;
//     role:Roles;
// }
// const user1:LoginDetails = {
//     name:"Ifra",
//     email:"ifrashamim29@gmail.com",
//     password:"1234",
//     role:Roles.user
// }
// const user2:LoginDetails = {
//     name:"Nisha",
//     email:"nishashamim15@gmail.com",
//     password:"123",
//     role:Roles.admin
// }
// const isAdmin:(user:LoginDetails) => string = (user:LoginDetails): string => {
//     const {name,role} = user;
//     return role === "admin" ? `${name} is allow to edit the website.` : 
//     `${name} is'nt allow to edit the website.`
// }
// console.log(isAdmin(user1));
// console.log(isAdmin(user2));
