// console.log(a); // Temporal dead zone starts
console.log(b); // The timming between the hoisting and value assignation...that phase is temporal dead zone
let a = 10; // Temporal dead zone ends
console.log(a);
var b = 100;
console.log(x);
// let a = 100; // Uncaught SyntaxError :"Indentifier a has been already declared"
// console.log(a);

// Const Declaration !!
// const c; Both the statements are not possible...
// c = 1000;
// const c = 2000; Declaration and initialization should be done in the same line...
//c = 600; It will give the typeError....As Already assigned to const variable...