const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog2.txt', {encoding: 'utf8'});

readStream.on('data', (chunk)=>{
    console.log('---- NEW CHUNK ----');
    writeStream.write('\n-----NEW CHUNK-----\n');
    writeStream.write(chunk);
})
// A much shorter way
// readStream.pipe(writeStream);