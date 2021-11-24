
var http = require('http');
var url = require('url')
var fs = require('fs')
const pb = require('@dendra-science/goes-pseudo-binary');
// var path = require("path")

// var formidable =require("formidable")
module.exports = pb

http.createServer((req,res)=>{
console.log(req.url)
if(req.url == "/styles.css"){
    res.writeHead(200, {'Content-Type': 'text/css'})
                     fs.readFile("styles.css", (err, data)=>{
                                                               res.write(data)
                                                               res.end()
                                                            })
}else{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile("index.html", (err, data)=>{
                                            res.write(data)
                                            res.end()
                                            })
    }
}).listen(8080,()=>console.log("server started !"))




