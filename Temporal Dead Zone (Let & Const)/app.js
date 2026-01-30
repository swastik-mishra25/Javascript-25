// console.log(a); // Temporal dead zone starts
console.log(b); // The timming between the hoisting and value assignation...that phase is temporal dead zone
let a = 10; // Temporal dead zone ends
console.log(a);
var b = 100;