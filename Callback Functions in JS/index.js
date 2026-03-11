// What is a Callback Function in Javascript
setTimeout(function () {
    console.log("timer");

}, 5000)
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
}); //function y is the callback function
// Creating a Event Listener
// document.getElementById("clickMe")
//     .addEventListener("click", function xyz() {
//         console.log("Button Clicked");
//     })
//Closures along with Event Listeners
//1st Method Using Global Variable (But Not A Good Idea)
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count)
// })
//Using Closures
function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").
    addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
}
attachEventListeners();