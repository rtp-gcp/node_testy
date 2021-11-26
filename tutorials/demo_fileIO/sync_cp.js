const {readFile, writeFile} = require('fs')

console.log('start with this task')
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


