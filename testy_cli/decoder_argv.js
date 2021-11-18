
// NOTE: This is a cool demo,  but the pseudo binary string has some characters which break the cli.  Specifically the
// ' marks are interpeted as a string to execute.  Use the readline version instead.
//


// run like so:
//
// >$ node decoder_argv.js CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG

const pb = require('@dendra-science/goes-pseudo-binary');



// Paste this buffer for the decode operation
// CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG



// Show the command line args.
// index 2 is first thing past the script argument 'node decoder_argv.js xxxx'
// ie. arg index 2 is the xxx part
process.argv.forEach((val, index) =>
{
    console.log( `${index}: ${val}`);
});

// Get the argv components and assign to a variable
const [node, script_name, the_buffer] = process.argv;

let pbf;
let ret;

let buffer_two = Buffer.from(the_buffer)

// this should decode it and print the result
pbf = new pb.Decoder('fp2_29, fp2_29');
//console.log("the input buffer is ");
//console.log(the_buffer);
//console.log("buffer_two is ");
//console.log(buffer_two);
ret = pbf.decode(buffer_two);
ret.then((val) => {
        console.log(val.rows.toString());
});



