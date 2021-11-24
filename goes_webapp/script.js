
//server.js
//const http = require('http'),
//      server = http.createServer();

// For when its converted back to node
// https://stackoverflow.com/a/62152027/1008596
//const pb = require('@dendra-science/goes-pseudo-binary');

//const fp2Buf = Buffer.from('CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG','ascii')

// https://tomlee.co/2011/10/gnu-screen-splitting/

//server.on('request',(request,response)=>{
//   response.writeHead(200,{'Content-Type':'text/plain'});
   //response.write('Hello world');
//   let pbf;
//   let ret;
//
//   pbf = new pb.Decoder('fp2_29, fp2_29');
//   ret = pbf.decode(fp2Buf);
//   ret.then((val) => {
//    response.write(val.rows.toString());
//    response.end();
//   });
//
//});

//server.listen(3000,()=>{
//  console.log('Node server created at port 3000');
//});


class GoesDecoder {
    constructor(format, buffer, decoder) {
        console.log("GoesDecoder() ");
        this.formatInput = format
        this.bufferInput = buffer
        this.decoderOutput = decoder
        this.clear()
    }

    clear() {
        console.log("clear() ");
        //this.format = ''
        //this.buffer = ''
    }

    performDecode() {
        console.log("performDecode() ");
    }

    updateDisplay() {
        console.log("updateDisplay() ");
        this.formatInput.value = ''
        this.bufferInput.value = ''
        this.decoderOutput.value = ''
    }
}

// Get reference to HTML elements
// button
const allClearButton = document.querySelector('[ac-button]')
const decodeButton = document.querySelector('[decode-button]')
// text areas
const formatElement = document.querySelector('[format-ta]')
const bufferElement = document.querySelector('[buffer-ta]')
const decoderElement = document.querySelector('[output-ta]')

// Build class with some of these specified?
const goesdecoder = new GoesDecoder(formatElement, bufferElement, decoderElement)

// Hook an event listener for the AC button
allClearButton.addEventListener('click', button => {
    goesdecoder.clear()
    goesdecoder.updateDisplay()
})

// Hook an event listener for the Decode button
decodeButton.addEventListener('click', button => {
    goesdecoder.performDecode()
})




