// When we use generic and non-generic type together then while calling the function we need to defined
// the type in a manner but with non-generircs we don't.
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;
// function add(a:any,b:any):any {
//     return a + b;
// }
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, "Ifra", false);
var result2 = add("Hello,", " World!", true);
