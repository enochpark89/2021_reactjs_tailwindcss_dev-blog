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

- Morgan also has *next* in the source code. It is just a composition of code or a library that someone wrote using express for convenience.

# 5. Routers

- Routers allow you to organize controllers and URL easier way.
- You can create a router map so that you would plan ahead of time what you need. 

What sort of data will be needed?

*How do you create your router?*

- For the sake of convenience, it is better to make your URL shorter like `/video` or `/user`.

- You can create a globalRouter as below:
```js
const globalRouter = express.Router();

const userRouter = expresss.Router();

const assetRouter = express.Router();
```

- Order diagram 
1. Express App calls a router
2. Router calls the function
3. Function displays a template

*How do you use your router?*
```js
// global router section
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

// userRouter
const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

// videoRouter
const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

// app will call Routers.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```

# 6. Clean Code

- When you work on the code, you become creative and tend to be very dirty.
- 'Clean Code' book will explain that you first write the code and use the same amount of time to clean out your code.
- You want to divide and conquer as you work on the program.

Recommendations:
- Create a seperate folder for each router.

Map:
src/routers/globalRouter.js
```js
// each router should have the router and the handler. Then, export the Router so that it can be used in other .js file.

import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

export default globalRouter;
```

- Since you delegated or separated the routers

Your server.js becomes simpler.

```js
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import assetRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();

// Use Morgan middleware 
const logger = morgan("dev");
app.use(logger);

// Use routers
app.use("/", globalRouter);
app.use("/assets", assetRouter);
app.use("/users", userRouter);

// server listening on port 4000 with console message
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
```

- Also, you can seperate the Router into a controller where it handles the route and display data.
- *It is not good to mix routers with controllers.*
- We do not need a global controller. 

*How you export a function?*

- You can either export using export const which export one line at a time or you can use export default which export only one component.

*Tip: always test your code after you have modified a part of a code.*

# 7. URL parameters

*How do you create an url parameters?*

- You can create a url that has a variable in it. 
```js
// You can create a URL parameter.
videoRouter.get("/:id/edit", edit);
```
- you can access the URL parameter by console logging req.params

*Tips: Make sure that your hard-typed parameter comes on top of an url parameters.*
```js
// NodeJS will check for the keyword upload first in the url and then route it to other URL parameters.
videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
```

*Can you allow specific url by creating a restriction?*

- You can create a certain criteria with the Express Route.
*Please refer to the ExpressJS documentation*
- You can also use regex to set the criteria.
	- Regex example:
	- `/(nico\w+)/g` : target all the words that start with nico. 

# 8. Templates

- Instead of responding to GET request with strings, you can respond with HTML or HTML template. 
- Since we have to set the Header, Footer, Content and other areas, it would be much more efficient to use Pug, which is a recommended way of creating a HTML template.

- Pug is a template engine

# 9. Pug

*How do you install a pug?*
- configure express to let it know that you are going to use a pug as a view engine. 
- by default, express will look for the pug template within the current working directory.

*How do you render a pug template?*
```js
const handleHome = (req, res) => res.render("home");
```

*You want to change the current working directory?*
- By default, express will look for the templates inside the cwd/views.
- If you want to change this cwd (current working directory), you can do the below.

- IF you don't want to change the current working directory, you have to move the view folder outside src, but you do not want this because you would like to have your files organized within src.

*By default, people see X-Powered-By when you create a server using Express. It is good idea to hide that from the users.*

*What can you do with pug that differs from HTML?*
- Pug is designed to make the template creating experience easier. Therefore, there are many features that allow us to work easily. 

1. JavaScript insertion

- You can insert JavaScript code within the HTML as below
```js
body
	h1 Watch Video!
	footer &copy; #{new Date().getFullYear()} Enowiz
```
*Pug template naming convention: make sure that all pug templates are names as a lowecase.*

2. Partial

- You can create all templates to have same part. 
- This can be accomplished using partials. 

src/views/partials/footer.pug
```pug
footer &copy; #{new Date().getFullYear()} Wetube 
```

src/views/watch.pug
```pug
doctype html
html(lang="ko")
    head
        title Wetube
    body
        h1 Watch Video!
    include partials/footer.pug
```

3. Extending Base

- You can create a base file that inherit template to all other templates. 

src/views/base.pug
```pug
doctype html
html(lang="ko")
    head
        block head
    body
        block content
    include partials/footer.pug
```

src/views/home.pug
```pug
extends base.pug

block head
    title Home | Wetube

block content
    h1 Home!
```

- if you put the block, you can choose to have different part inside different templates.

4. Variables

- You can set the variables inside a pug template.
- You can send variables from the controler. 

src/controllers/videoController.js
```js
export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
```

src/views/base.pug
```pug
doctype html
html(lang="ko")
    head
        title #{pageTitle} | Wetube
    body
        block content
    include partials/footer.pug
```

5. Conditional

- You can create h1 like below
```js
// we do this because h1 will only have pageTitle value.
h1=pageTitle

// if you want to mix variable with text do #{variable}
```

- Create conditional inside .pug.
```pug
// assuming that there are fakeuser variable...
	header
		if fakeUser.loggedIn
			small Hello #{fakeUser.username}
		nav

			ul
				if fakeUser.loggedIn
					li 
						a(href="/logout") Log out
				else
					li 
						a(href="/login") Login
		h1=pageTitle
```

6. Iteration

- Usually, data is saved in an arry or an object. 
- In order to navigate each row or each element in an array or an object, you have to use below.
*Basically, you are using for-each loop to access each element inside an array.*
```pug
    ul
        each video in videos
            li=video
        else
            li Sorry nothing found.
```

- Usually the convention is that the an array is represented with 's' at the end to indicate that there are multiple values stored. Then, when you are looping with for-each, you are saying `each <variable with no 's'> in <variables>`

7. Mixins

- Mixins is like a partial but it is a partial that receives a data. 
- We need a block of HTML that need data. 
- Mixins are smart partial.
- Mixins can be better understood with an examples. 

Videos data information:
```js
 const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];

```

src/views/mixins/video.pug
```pug
// mixins will receive an info data and allow do an extraction as below.
mixin video(info)
    div
        h4=info.title
        ul
            li #{info.rating}/5.
            li #{info.comments} comments.
            li Posted #{info.createdAt}.
            li #{info.views} views.
```

*How do you call a mixin?*
- You can mixins with '+' sign.
src/views/home.pug
```pug
extends base
include mixins/video

block content
    h2 Welcome here you will see the trending videos
    each potato in videos
        +video(potato)
    else
        li Sorry nothing found.
```
src/views/home.pug

# Q&A

*What if NodeJs doesn't read the exported component?*

- Add below to the package.json
```js
  "scripts": {
    "dev": "nodemon --experimental-modules --es-module-specifier-resolution=node src/server.js"
  },
```

