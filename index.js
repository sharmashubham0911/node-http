const http     = require('http');

const hostname = 'localhost';
const port     =  3000;

// let's setup the server

//createserver is a method with takes a function as a arguement

const server   = http.createServer( (req,res) => {
         
    console.log(req.headers);    //TO check where this request is coming from

//Now we will be constructing the response 
    
     res.statusCode = 200;     //this statuscode means everything is okay 
     res.setHeader('Content-Type', 'text/html');    //response will be in html format
     res.end('<html><body><h1>Bhaag bhosdike!</h1></body></html>');   //response is going to end here, now it will sent the response to client



})

//Now we have set up the server, we need to start the server

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});

