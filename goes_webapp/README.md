# how to use node

```
mkdir foo
cd foo
npm init
it will make a package.json file
vi server.js
add this

//server.js
const http = require('http'),
      server = http.createServer();

server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});

node server.js

open browser to localhost:3000

npm install @dendra-science/goes-pseudo-binary


# script.js vs server.js

If you use the web browser to load index.html as a file, it will load styles.css and script.js.
However, this will not permit the goes binary lib load.
