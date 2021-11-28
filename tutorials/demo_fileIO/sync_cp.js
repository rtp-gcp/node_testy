

// Notice this one uses the readFileSync name
// I thought that was just my name for the function
// Its not the case, here is a comparision of readFile vs readFileSync
//
// fs.readFile(path[, options], callback)
// vs
// fs.readFileSync(path[, options])

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./one.txt', 'utf8')
const second = readFileSync('./two.txt', 'utf8')

writeFileSync(
  './result_sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')


