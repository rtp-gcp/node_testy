const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const pb = require('@dendra-science/goes-pseudo-binary');
 
readline.question('Enter input buffer ', input_buffer  => {


   let pbf;
   let ret;

   pbf = new pb.Decoder('fp2_29, fp2_29');
   ret = pbf.decode(${input_buffer});
   ret.then((val) => {
    console.log(val.rows.toString());
   });


  readline.close();
});


