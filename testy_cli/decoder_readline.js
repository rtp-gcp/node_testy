const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const pb = require('@dendra-science/goes-pseudo-binary');



// Paste this buffer for the decode operation
// CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG

let input_buffer;
readline.question('Enter input buffer ', (input_buffer) => {

    let pbf;
    let ret;
    let fp2Buf;

    // this will dump the buffer we resoond with 
    //console.log(input_buffer);

    // this should decode it and print the result
    pbf = new pb.Decoder('fp2_29, fp2_29');
    fp2Buf = Buffer.from(input_buffer,'ascii')
    ret = pbf.decode(fp2Buf);
    ret.then((val) => {
        console.log(val.rows.toString());
    });
    readline.close();
});








