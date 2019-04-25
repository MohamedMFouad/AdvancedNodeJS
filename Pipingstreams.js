const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');
 

readStream.pipe(writeStream).on('error',console.error);

//the pipe function allows us to pipe data from any readable stream to any writable stream.