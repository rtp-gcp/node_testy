
// simple show how to send a message
console.log('hello javascript')

// objects

const obj = new Object();

obj.name = "clown";
obj.face = "smiley face";

// alternative

const obj2 = {
    name : 'clown',
    face : 'smiley face',
    hello: function() {
        console.log(`hello ${this.name}`)
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj['face']);
obj2.hello()


// difference between this for functions and anoymous functions

const obj3 = {
    // this binds to the obj
    hello: function() {
        console.log(this)
    },
    // this binds to the parent, the global space
    hello2: () => {
        console.log(this)
    }
}

obj3.hello()
obj3.hello2()


// 

const clown = {
    face: 'clown'
}
const ghost = {
    face: 'ghost'
}

function hello() {
    return this.face;
}

const result = hello();
console.log(result) // undefined when using hello() function

const result2 = hello.call(ghost)
console.log(result2) // resolved


