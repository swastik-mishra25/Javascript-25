// getName();
// console.log(x);
// console.log(getName);




var x = 7;

function getName(){
    console.log("Swastik Mishra");
}
// }...Here it beahves as function

getName();
console.log(x);
console.log(getName);


// getName();
// console.log(x);

// console.log(getName);

// When getName is an arrow function 
var getName = () => {
    console.log("Swastik Mishra");
}
// In the above it is treated as variable

// Another type in which function is initialized(getName)

var getName2 = function(){
    console.log("Swastik Mishra");
}
// In the above also it is treated as variable (getName2)