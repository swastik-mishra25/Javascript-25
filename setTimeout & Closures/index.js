// function x() {

//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");

// }
// x();

// Most Asked Tricky JS Interview Question

// Basic Approach

// function x (){
//     for (var i = 1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste Javascript");    
// }
// x();

//  Solution Approach

// function x (){
//     for (let i = 1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste Javascript");    
// }
// x();

// Another Approach using var only
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste Javascript");
}
x(); 
