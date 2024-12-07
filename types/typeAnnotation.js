// ************* Type Annotations *************
// It is a way of explicitily specifying the type of variable,
// function parameter or function return value.
// Type annotations are expressed by using a colon(:) followed by desired type 
// after the variable or function parameter declaration. There can be a square after the colon
// ************* Number Type *************
// The number type represents numeric values , including integers and floating point 
// let myFavNum:number = 8;
// let myAge:number = 20;
// let pi:number = 3.14;
// let myNegValue = -3;
// let computedValue:number = Math.sqrt(16);
// let nanValue:number = NaN;
// ************* String Initialization *************
// Declare a variable message of type string and assign it the value "Hello, Typescript!"
// let message:string = "Hello, Typescript!";
// console.log(message);
// ************* Concatenation *************
// Create two variables firstName and lastName of type string and assign them your first name and last name
// respectively.Concatenate the two variables and store the result in a variable called full name.
// let firstName:string = "Ifra";
// let lastName:string = "Shamim";
// let fullName:string = firstName + lastName;
// console.log(fullName);
// ************* String Length *************
// Declare a variable sentence of type string and assign it a sentence of your choice.Find the length of
// the string and store it in a variable called sentenceLength
// let sentence:string = "I am a Frontend Developer";
// let sentenceLength:number = sentence.length;
// console.log(sentenceLength);
// ************* Uppercase And Lowercase *************
// Declare a variable text of type string and assign it a sentence of your choice.
// Convert the entire sentence to uppercase and store the result in a variable called uppercaseText
// Then convert the entire sentence to lowercase and store the result in a variable called lowercaseText.
// let text:string = "My name is Ifra Shamim.";
// let uppercaseText:string = text.toUpperCase();
// console.log(uppercaseText);
// let lowercaseText:string = text.toLowerCase();
// console.log(lowercaseText);
// ************* Substring *************
// Declare a variable longText of type string and assign it a long sentence.Extract the first 10 characters 
// from longText and store them in a variable called shortText.
// let longText:string = "My name is Ifra Shamim";
// let shortText:string = longText.substring(0,10);
// console.log(shortText);
// ************* String Comparison *************
// Declare a variable of str1 and str2 of type string and assign them different sentences.Compare the two strings
// and store the result (true or false) in a variable called areEqual.
// let str1:string = "My name is Ifra Shamim";
// let str2Text2:string = "I am a Frontend Developer";
// let areEqual:boolean = str1 > str2;
// console.log(areEqual);
// ************* String Template *************
// Declare variables product and price of type string and number ,respectively.Create string using template 
// literals to display the product and its price in the formatting product {product} is priced at {price dollars}
var product = "Pani Puri";
var price = 200;
console.log("Product ".concat(product, " is priced at ").concat(price, "."));
