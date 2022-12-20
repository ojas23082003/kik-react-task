const fs = require('fs');
// if(fs.existsSync('./docs/blog2.txt')){
//     fs.writeFile('./docs/blog2.txt', "Hello everyone!", (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('File written.');
//     })
// }else{
//     fs.mkdir('./docs/blog2.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Created a file.');
//         fs.writeFile('./docs/blog2.txt',"Hello everyone!", (err)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log('File Written.');
//         })
//     })
// }

//Reading files
// const x = fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString()); //data is a buffer, convert it to a string first.
//     }
// });

//fs.readFile is asynchronized, it doesn't stop the code there => parallel execution.

//Writing files
// fs.writeFile('./docs/blog1.txt', 'Hello World!' ,()=>{
//     console.log('File was written.');
// })

// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

//Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('Made a folder.');
//         }
//     }) //make directory
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Deleted the folder.');
//         }
//     })
// }

//Deleting files
// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('Deleted a file.');
//         }
//     })
// }