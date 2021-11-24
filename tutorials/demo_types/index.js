
// simple show how to send a message
console.log('hello javascript')

// ! is the not operator.  It forces a value to be
// either true or false.  A double not will show
// what the value resolves to.  Use when you want to
// find what a string or number resolves to.
console.log('get bool value of true')
var w = !!true;
console.log(w);  // true is true

console.log('get bool value of hello string')
var x = !!"hello";
console.log(x); // non null string is true


console.log('get bool value of number one')
var y = !!1;
console.log(y); // one is true


console.log('get bool value of number zero')
var z = !!0;
console.log(z); // zero its false


console.log('get bool value of blank/null string')
var n = !!"";
console.log(n); // null string is false

// == checks for equivelant value
console.log('get result of == ')
var e = "42" == 42
console.log(e); // a string 42 is same as numeric 42 with ==

// === tests for equivalent value and equivalent type
console.log('get result of === ')
var f = "42" === 42;
console.log(f); // a string 42 is differnt from numeric 42 with ===

