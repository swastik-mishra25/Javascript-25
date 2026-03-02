
//Function Statement aka Function Declaration
function a() {
    console.log("a called");
}

//Function Expression
var b = function () {
    console.log("b called");
}
a();
b();

//Anonymous Function
// function() {

// }
//Named Function Expression
var c = function xyz(){
    console.log("c called");
}
xyz();

//Difference between Parameters and Arguments
//First Class Functions
//Arrow Functions