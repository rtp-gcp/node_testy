
//server.js
const http = require('http'),
      server = http.createServer();

const pb = require('@dendra-science/goes-pseudo-binary');

const fp2Buf = Buffer.from('CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG','ascii')


server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   let pbf;
   let ret;

   pbf = new pb.Decoder('fp2_29, fp2_29');
   //ret = pbf.decode(fp2Buf).then(ret => { ret.rows});
   pbf.decode(fp2Buf).then(ret => { ret.rows});
   response.write(ret);

   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});



