
// simple show how to send a message
console.log('hello javascript')

// functions and closures

function hello(input) {
    const output = "Hello, " + input + "!"
    console.log(output);
}

function hello2(input) {
    const output = "Hello, " + input + "!"
    return output;
}
hello("John");
console.log(hello2("Fred"));


// shortcut function declaration

// hello3 is a function.
// input is a function parameter
// output = "Yo, " + input is the function body.  Similar to R? it returns
// the last value without using an explicit return?  Nope. That must only
// be the case in the single line function definition.  See hello4
const hello3 = (input) => output = "Yo, " + input;
console.log(hello3("Davis"));

function hello4(input) {
    "hello" + input;  // <--- this line alone, will not return the value;
}
console.log(hello4("does this return?"));

// anoymous function
const aName = function() {
    return "Sam";
}
console.log(aName);


// invoke a function as a parameter
function cool(fun) {
    fun();
}
cool( () => console.log('sweet') );

// likewise, invoke aName()
console.log(aName());


// A closure is a function defined within a function

// note the count variable persists

function outer() {
    const fish = "fish";
    let count = 0;

    function inner() {
        count++;
        console.log("inside the inner function");
        return `${count} ${fish}`
    }

    return inner
}

// without the inner function maintaining state, it
// does not persist 
function outer2() {
    const fish = "fish";
    let count = 0;

     count++;
    return count
}

const fun = outer();

console.log(fun());
console.log(fun());


console.log(outer2());
console.log(outer2());
    
