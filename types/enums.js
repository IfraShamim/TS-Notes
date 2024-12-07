// ------------- Enums in Typescript -------------
// Enums in typescript are commony used when you want to represent a set of related values and choose one
// value from multiple options.Enums provide a convenient way to define a set of named values and associate 
// them with specific meanings.
// In Typescript, when enum constants are not explicitly assigned numeric values, They are automatically
// assigned incremental numeric values starting from 0.The default numeric value for the first enum 
// constant is 0.and subsequent enum constants receive values incremented by 1.
// user1 = login => normal user 
// user2 = login => admin user 
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
var user1 = {
    name: "Ifra",
    email: "ifrashamim29@gmail.com",
    password: "1234",
    role: Roles.user
};
var user2 = {
    name: "Nisha",
    email: "nishashamim15@gmail.com",
    password: "123",
    role: Roles.admin
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin" ? "".concat(name, " is allow to edit the website.") :
        "".concat(name, " is'nt allow to edit the website.");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
