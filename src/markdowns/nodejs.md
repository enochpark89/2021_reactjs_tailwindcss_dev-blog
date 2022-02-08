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

# Pre-installations

## 1. Install Express.js

- Though you can call the index.js using `node index.js`, we will use express.js to run other javascript code before we run node. 
- you can create a script inside package.json as below
```js
  "scripts": {
    "win": "node index.js"
  },
```
- If you have the script ready, you can run the script as below

```bash
npm run win
```

*How do you install express.js?*
```bash
# Run below
npm i express
```

*Node_modules got created. What is node_modules?*
- node_module has all the files that you need to run the node script.
- express.js also has some scripts.

*How do you use express?*

```js
const express = require("express");
const app = express();
```

## 2. Install Tower of Babel

*What is babel?*
- A babel is a javascript compiler.

- There are some recent JS that nodeJS does not understand. Therefore, Babel will translate most recent JS into the standard JS that nodeJS understands. 


*How do you install babel?*
```bash
npm install --save-dev @babel/core
```

- Install @babel/preset-env

*How do you install babel/preset-env*
```bash
npm install @babel/preset-env --save-dev
```

*Why do you need babel/preset-env?*
babel/preset is a very big plugin for babel. It allows us to use the latest javascript. 

## 3. Install Nodemon

Before, install other plugins for babel such as @babel/core and @babel/node.

```bash
npm install @babel/core @babel/node --save-dev
```

*How do you apply babel?*
package.json
```js
  "scripts": {
    "dev": "nodemon --exec babel-node index.js"
  },
```
*What is nodemon?*
- Nodemon detects changes in the file and restart the server so that the change may be applied.

*How do you install nodemon?*
```bash
npm i nodemon --save-dev
```
Result: Run npm run dev once and the change will displayed by automatically restarting the server.

Error 1: 'babel-node' is not recognized as an internal or external command,
operable program or batch file.

```bash
npm install -g babel-cli
```

# Essentials



# 1. Server

- With node.js, you can create a webserver like below with few lines of code. 

```js
import express from "express";
const PORT = 4000;

// Create a server with an express module.
const app = express();

// Create a function that handles listening to the server. 
const handleListening = () => 
	console.log('Server listening on port http://localhost:${PORT}');

// Start the server on the PORT 4000 and execute the handleListening function.
app.listen(PORT, handleListening);
```

# 2. Server Responds to GET requests

- You can make the server respond to GET requests.
- Everytime, user enters into a website, the web server is responding the users' GET requests.
- Considering that the server is already set up, you can do below to make a response
```js

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");

// With this, app will respond to the GET request gets send to '/' (home) with handHome function.
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
```
*Tips: You can create a route to the html template.*

# 3. Server respond for GET requests by sending.

```js

const app = express();

// after receiving a request via req, you can give response by using res.
const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
```

- You can send texts, HTML, or JSON.
- You can view different functions that you can use for res such as res.render(), res.send(), res.status() and res.type().

# 4. Middleware

## a. Create a Middleware with app.get

- Middleware is a software in the middle. 
- Middleware can be established using a below function
```js
// gossipMiddleware gets called first and then it resolves to handleHome
const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};
app.get("/", gossipMiddleware, handleHome);
```

## b. Create a middleware with app.get
- Besides app.get, you can use app.use to create a middleware

```js

const logger = (req, res, next) => {
	console.log(`#{req.method} ${req.url}`);
	next();
}
const privateMiddleware = (req,res, next) => {
	const url = req.url;
	if (url === "/protected") {
		return res.send("<h1>Not Allowed</h1>");
	}
	console.log("Allowed, you may continue.");
	next();
}

const handleHome = (req, res) => {
	return res.send("I love middlewares");
};

const handleProtected = (req,res) => {
	return res.send("Welcome to the private lounge.");
};

// The middlewares will launch in the order of logger > private Middleware > handleHome or handleProtected. In this particular case, privateMiddleware() is checking the url. 

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
```

## c. Morgan - external middleware

*What is Morgan?*
- morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process. In Node.js and Express, middleware is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server.

- Morgan is a bit more sophisticated because it will provide GET, route, status code, and how long it took to respond from the server console.

*How do you use Morgan middleware?*

1. Install Morgan 
```bash
npm i morgan
```

2. Import Morgan and use it.
```js
const logger = morgan("dev");
app.use(logger);
```

- Morgan also has next in the source code. It is just a composition of code or a library that someone wrote using express for convenience.


