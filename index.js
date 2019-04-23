const fs = require('fs');

const readStream = fs.createReadStream('../../powder-day.mp4');

readStream.on('data', (chunk)=>{
    console.log('reading little chunk\n', chunk.length);

})
readStream.on('end', ()=>{
    console.log('readsream finish ');
})

readStream.on('error', (error)=>{
    console.log('an error has occure');
    console.log(error);
})  

readStream.pause()
process.stdin.on('data',(chunk)=>{
    if(chunk.toString().trim() === 'finish'){
        readStream.resume();
    }
//   var text = chunk.toString().trim();
//   console.log('echo :', text);
      readStream.read();
})