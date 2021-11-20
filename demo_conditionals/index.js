
// simple show how to send a message
console.log('hello javascript')

// if, if/else, switch and the ? operator

var x = "yo";
var y = "ho";


if (x === y) {
    console.log("x is equal y");
} else {
    console.log("x is NOT equal y");
}

// The ? operator
var z = x === y ? "x and y equal" : "x and y NOT equal";
console.log(z);

// switch
switch (x) {
    case 'yo':
        console.log('x is yo');
        break;
    case 'ho':
        console.log('x is ho');
        break;
    default:
        console.log('x is not one of the case statement choices');
}

// try catch finally

try {
    throw new Error();
    console.log('in try block');
} catch (error) {
    console.log('in catch block');
} finally {
    console.log('in finally block');
}
