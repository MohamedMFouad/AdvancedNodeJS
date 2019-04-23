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