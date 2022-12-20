const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, response)=>{
    // console.log(request.method, request.url);
    // const num = _.random(0, 20)
    // console.log(num);
    response.setHeader('Content-Type', 'text/html');

    let path = './views';

    switch(request.url){
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.html';
            break;
        default:
            path += '/404.html';
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            response.end();
        }else{
            response.end(data);
        }
    })
});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for requests.');
});