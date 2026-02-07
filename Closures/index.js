// Example of Closures
// function x(){
//     var a = 7;
//     function y (){
//         console.log(a);
//     }
//     y();
// }
// x();

// Impact of return keyword

function x(){
    var a = 7;
    function y (){
        console.log(a);
    }
    return y;
}
var z = x(); // Calling a function or invokation of a function 
console.log(z);
// After this x is totally gone no existance of x in the call stack...
z();

// Corner Cases
function x(){
    var a = 7;
    function y (){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x(); 
console.log(z);
z();
