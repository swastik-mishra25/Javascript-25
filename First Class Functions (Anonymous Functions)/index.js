
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
xyz(); //It will throw error as it is executed in the outerscope but it will not give any error if it is called in the local scope 
//Difference between Parameters and Arguments
 
//First Class Functions
//Arrow Functions