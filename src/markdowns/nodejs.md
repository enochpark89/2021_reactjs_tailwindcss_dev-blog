# NodeJS

*What is Nodejs?*
- Node.js is an open source server environment.
- Node.js allows you to run JavaScript on the server.

*What is the difference between PHP/ASP vs NodeJS?*

Here is how PHP or ASP handles a file request:

1. Sends the task to the computer's file system.
2. Waits while the file system opens and reads the file.
3. Returns the content to the client.
4. Ready to handle the next request.
5. Here is how Node.js handles a file request:

Sends the task to the computer's file system.
1. Ready to handle the next request.
2. When the file system has opened and read the file, the server returns the content to the client.
3. Node.js eliminates the waiting, and simply continues with the next request.

- Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.



# Essentials

# 1. Modules

*What is Moduel in Node.js?*
```js
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

*How do you create your own module?*
```js
exports.myDateTime = function () {
  return Date();
};
```

*How do you include your own module after you created it?*
```js
var dt = require('./myfirstmodule');
```

# 2. HTTP Module

*How do I create a webserver with nodeJS?*

- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

- The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

- Use createServer() to create an HTTP server.

```js
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

