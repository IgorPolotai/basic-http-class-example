//npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import

const http = require('https'); //require: either we write it, it's from a module, or it's from a npm module
const fs = require('fs'); //has access to your hard drive. Can create, read, write, and delete files
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`); //readFile reads the file in a thread, while sync waits until the file has been read before running the rest of the code
// _dirname is the absolute path to this file, and ../ goes up one directory
console.log(index);

const onRequest = (request, response) => {
    console.log(request.url);

    switch(request.url) {
        case '/': 
            response.writeHead(200, {
                'Content-Type': 'text/html' //'text/plain' 
            }) //200 status code = Ok!
            response.write(index);
            break;
        default: 
            response.writeHead(200, {
                'Content-Type': 'text/plain' 
            }) 
            response.write('Wrong page!');
            break;
    }

    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running on port ${port}`); //this is a callback function that fires after the server is created
    //check to see that the server is running by typing localhost:3000 in a browser. 
    //Double tap ctrl+c to end a server in the command line
});