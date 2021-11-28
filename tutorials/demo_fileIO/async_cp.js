const {readFile, writeFile} = require('fs')

console.log('start')
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
        // I wonder why he calls this async?
        writeFile( 
                 './result_async.txt',
                 `Here is the result: ${first}, ${second}`,
                 (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('done with this task')
                 }
        )


    })
})

console.log('last line of code')


