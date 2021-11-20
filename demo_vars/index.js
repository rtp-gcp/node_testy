
// simple show how to send a message
console.log('hello javascript')

// var let const

// define a global variable
var g;

// assign a value
g = "yo";
// assign another value
g = "ho";

function a_fun() {
    // if you assign a variable without defining it, it becomes global even 
   // if done in a function
    x = "xxx";
    console.log(g);
}

a_fun();
console.log(x);

// hoisting is when you define a variable before its used.  The variable
// declaration statement is "hoisted" to top of script as if it was actually
// declared there.

z = "zzz";
console.log(z);
var z;


// let and const do not hoist or promote to parent scope.

function a_another_fun() {
    var y = "yyy"
    let w = "www"
    const h = "hhh"
    console.log(y);
    console.log(w);
    console.log(h);
}

console.log("In older javascript, y is in parent scope");
//console.log(y);
console.log("let is NOT in parent scope");
//console.log(w);




