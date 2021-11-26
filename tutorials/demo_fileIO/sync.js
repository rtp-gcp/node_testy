const {readFile, writeFile} = require('fs')


// this routine will return the file contents as ascii hex
//
console.log("call readFile()")
readFile('./one.txt', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result);
})


// this routine will return the file contents as ascii hex
//
console.log("call readFile()")
readFile('./one.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result);
})


// demo the callback calling the original and it has a callback
// Notice the result is only visible in the callback 
//
console.log("demo nested readFile()")
readFile('./one.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;

    readFile('./two.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        console.log(first + second)

    })
})




