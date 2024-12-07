// ************ Any Type ************
// The any type is the most flexible type in Typescript.It essentially turns off all type checking
// for the variables or expressions it is applied to.
// let maxNumber = (Number as any).MAX_SAFE_INTEGER;
// console.log(maxNumber);
// let myFavNum: any = 16;
// myFavNum = "Ifra";
// myFavNum = true;
// ********* useCases *********
// Working with dynamic data: When dealing with data from dynamic sources like user inputs, network 
// responses, or deserialized JSON objects, the any type can be useful.
// Migration from javascript when migrating an existing javascript codebase to typescript, using the any 
// type can be a convenient to quickly annotate variables and functions without immediately specifying
// their precise type.
// ********************* Unknown Type *********************
// The unknown type is a safer alternative to any because it still enforces type checking and type safety.
// Variables of type unknown can hold values of any type,but you must performs type checks or type assertions
// before using them in specific ways.
var num2;
num2 = 2;
num2 = true;
if (typeof num2 === "boolean") {
    console.log(num2);
}
