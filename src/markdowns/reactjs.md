### Table of Contents  
[Headers](#react)  
[Emphasis](#facts) 


# React
*What is reactJS?*
- React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.
-   It lets you use the full programmatic power of JS.
    - Uses JSX similar to the HTML.
- React is the view layer of an MVC application (Model View Controller)

*Why use reactJS?*
- It eleimates complications and repetitions that arise from using only HTML, CSS, and JavaScript.
    - It makes re-rendering of page much simpler. (*In terms of lines of code*)
    - React re-render only part that has been changed rather than the whole page, which help a client or a user saves some memory from their end.

# Essentials

- These are essential concepts of reactjs. 
**This will also be a Proof of Concept (POC)**
- Official documentation: https://reactjs.org/docs/getting-started.html

1. State
- State is where your data will be saved. State can be maintained as long as the page isn't refreshed.
    - ex) 
    a. Create a state called counter that hold a number.
    b. Create a button that add 1 to the counter.
    c. After a change of state, you can render a web page to show the change in a state.

2. setState
- In order to set a new value to a state, you use userState() function.
- useState() contains [<value>, <modifier function>]
- we use ES6 to take out a value and a modifier as below because it is easier.
```js
const [value, modifier] = React.useState(<value>) 
// or setState(<value>)
```
- After you create useState, you can use a modifier function to change a value in of the state.
- The good thing about a modifier function is that it automatically trigger re-render so that the change in the state shows on a web page.
*re-render and refresh are synonymous.*

3. Change State

- When you want to change a state based on a current value, there are two ways of changing a state.
```js
// 1 - might cause unexpected updates
setCounter(counter+1);
// 2 - safer: protect against unexpected updates.
setCounter((current)=> current+1);
```

# Quickstart:
- In order to quickly install the React.
1. npm global add create-ract-app
- This is a global module that is not used often. It requires a frequent update.
2. npx
- npx does not require for you to keep the app file in yoru computer. 
```js
npx create-react-app .
```
3. Make src folder the root
- In order to make a src folder a root, you can create the file called 'jsconfig.json' and put the below code
```
{
    "compilerOptions": {
    "baseUrl": "src"
    }
}
```

# Facts

- Shell > npm start will keep the server running and updated on each changes. 
- In React, everything is components.
- Every page of the react must import React from "react" because React wouldn't be aware of the file if you don't. 
- I recommend working all things in the App.js and seperate the files later in order because this might be easy to keep track of everything and all the changes that can happen. 

- Async()...wait is used when you want React to wait for the data to be fetched and move return the data instead of skipping over.
```javascript
Async () {
  const data = await axios.get(<link>)
}
```

*What is component?*
- Component is a function that returns HTML. 
- Components can be exported and imported to App.js for use. 
- Reusable components are components that are modulized for later use. Once modulized, you can use the components like <Name /> (closing tag w/ the name of the components.)


*What is Dynamic Component Generation?*
- Since you can't just specify the object name to grab data every time, you can use the javascript to iterate through an array and return data. 
- The react will provide with an error message when the Props with wrong types exist.
- Everytime you run the setState, the react is going to rerender the page. (This is the reason that they need render() in the App() function)

*What is JSX?*
- JSX is a proprietary concept specific to ReactJS. 
- This is the only thing you have to learn on top of the JavaScript.; 

*What is the order of operation?*
1. src/App.js gets initiated first. 
    - return JSX or HTML. 
    - export an App.
2. import App.js to src/index.js.
    - Using ReactDom, it connects to the public index.html.
    - transfer the JSX into the one of the div of index.html.
3. Other files such as <name>.js can be imported. 
    - Inside, there is JSX file(a function that returns HTML)
- ex:
```react
import React from "react";

function Potato() {
  return <h3>I love potato</h3>;
}

export default Potato;
```
4. This can be imported to App.js and be used with the Component syntax
```react
<Potato />
```

- JSX uses className instead of class. 
- JSX uses a click event called onClick instead of onclick.
- JSX uses many "self-closing tag" such as <br /> or <hr /> (for the ones that do not need to contain information.)
- Components are the core of React.There are two ways to create a React component.
  1. *stateless functional component:*
  - think of it as one that receives data and render it. 
  2. ES6 class syntax.

# Fundamentals:

# 1.0. Props
*What is props?*
- Within JSX file, you can send many props to the children.  

  ex 1: Inheriting props.
  App.js
  ```js
  import React from "react";

  // Take the favorite from the object using ES6.
  function Food({ favourite }) {
    return <h1>I like {favourite}</h1>;
  }

  // you can send multiple props to the Food Component.
  function App() {
    return (
      <div>
        <h1>Hello</h1>
        <Food favourite="kimchi" />
        <Food favourite="ramen" />
        <Food favourite="samgiopsal" />
        <Food favourite="chukumi" />
      </div>
    );
  }
  ```

# 2.0. PropTypes
*What are PropTypes?*
- you can install prop-types to make sure that the types of the props are correct.
ex:
```js
import PropTypes from "prop-types";
// Assuming that there are Props below, you can write what you are expecting when the Props are passed down from the App > child components.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

```
# 3.0. State

- Extends React.Component from class App if you want to use state. 

```js
class App extends React.Component {
```
- The state is developed primarily to refresh the page whenever the change has been made on the data being displayed. 

- Basic example of using state: Add 1 or Subtract 1
```js
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // state Object with value is declared.
  state = {
    count: 0
  };

  // add 1 if the button is clicked.
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  // subtrat 1 if the button is clicked.
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

# 4.0 Mounting

- Component life cycle is important because you can expect how things will be executed in order. 
There are two states to this (mount, unmount)

Order:
1. Mounted - the webpage is rendered for the first time. The functions will be executed in below order:
a. constructor() - constuctor() gets created once a class is created.
b. render()
c. componentDidMount()

2. Updated - the webpage gets updated because users performed certain actions like clicking a button. 
a. render()
b. componentDidUpdate()

3. Unmounted - this gets executed when the user leaves the page. 

In a nutshell, lines of code inside those functions will be executed in above orders. 
The benefit of this is that we can include some lines of code that we want to be executed at certain stages maybe to keep track of changes or to notify the users of changes etcs.

# 4.0. Class Component


### React Developer Tools
- React Developer Tools make it easier to inspect components that you've written.


2. Properties and methods in JSX are camelCase - onclick will become onClick.
3. Self-closing tags must end in a slash - e.g. <img />

# Library

1. Axios - Fetch data from API
- Axios is a nice little layer on top of fetch. 
- Install: npm i axios.
ex1: get the JSON file from the API. 
```js
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
```

# Hooks - in addition to ReactJS

- People can develop their own hooks. 
- Hooks is basically to let the users hook into the React Componenet. > everything becomes a functional programming. 

1. useState

ex1: Increment and Decrement
```js
import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item+1);
  const decrementItem = () => setItem(item -1);

// when the user clicks on the button it will either increment or decrement item.
  return (
    <div className="App">
      <h1>Hello CodeSandbox {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
    <button onClick={incrementItem}>Increment</button>
    <button onClick={decrementItem}>Decrement</button>

    </div>
  );
}

```

ex2: useInput - Put a value and fire an event

```js
import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const userInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

export default function App() {

  const name = userInput("Mr.");
  
  return (
    <div className="App">
      <h1>Hello </h1>
      // {...name} will fire all functions inside the userInput.
      
      <input placeholder="Name" {...name} />
    </div>
  );
}

```

ex3: useInput - expand it. 

- Add a validation

```js
import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Add VAlidator so that what they type is validated.

const userInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// default input will be default.
// maxLen will check whether the value inside the input has a length less than 10.

export default function App() {
  const maxLen = (value) => value.length <= 10;
  // const maxLen = valuoe => !value.includes("@")

  const name = userInput("Default", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

```

2. useEffect
ex: 
```
  useEffect(()=> {
    sayHello();
  });
```
- First argument is an Effect.
- Second argument is a Dependency.
ex2:
```js
useEffect(sayHello, [number]);
// fire sayHello function when the number variable changes. 
```

- Reference: 

3. useRef

- This works as a HTML ID for JSX.
- you can use this to add an event listener.


*useContext and useReducer make your code less and do a beautiful things*

Introduction to useContext and Redux
*What is context? and why do you need Redux?*
- If you have a website, there are many screens. If all of the pages have the photo of the user or an email of the user, 

- Two options
  1. every screen, every mount, you ask for the data in API. 
  2. If you have three objects, there are so many request of API.
  Since there are so many requests, they wanted to store states in one component. one component will give props for three screen.
  However, there is a problem when you need to edit the user. Then, the Component need an Higher-Order function. Because of this, we need Redux or State Management Library. State management only is needed when the component gets too big.

  - The Header might have avatar picture.
  - when this happens, you have to send User Prop to Higher-Order Component, the screen send User Prop to the HEader, Header needs to send User Prop to the avatar.
  - When there are many Components with many Props, this might cause an error. Instead of having one big component, you can have one data storage or warehouse. Here, where all data is coming from. This is where you save the user avatar, email, and others. When the header needs an avatar, it will get the avatar from the store. 

  Instead of keeping your data is Component, State, to the Props, you can have data storage that gives data whenever needed.

4. useContext



5. useReducer




=======
extra
=======

4. useConfirm & usePreventLeave
- When the button is clicked, it will pop a message saying "Are you sure?"
- Different messages will show depending on what answers that you choose. 
```js
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useConfirm = (message, callback, rejection) => {
  if (typeof callback !== "function"){
    return;
  }
  const confirmAction = () => {
    if (confirm(message)){
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;

```

5. 


# Function:

1. Create JSX
```react
const JSX = <h1>Hello JSX!</h1>;
```

2. Create JSX with div
- JSX only takes one div or one parent wrapper at a time.
- Its a good practice to wrap all JSX in a parenthesis to avoid any confusions.
```react
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

3. Comment in JSX.
- you use {/* */} to wrap around the comment text.

```react
const JSX = (
  <div>
  {/* I can comment within JSX*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

4. React DOM

- ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode)
  - first argument is the React element or component that you want to render
  - the second argument is the DOM node that you want to render the component to.

```js
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

5. className

```react
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
```

6. Create a React component using stateless functional component. 

- The first way of creating a react component.

```react
const MyComponent = function() {
  return (<div>hello</div>);
}
```
- This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

7. Create a React component using ES6 class.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (<div><h1>Hello React!</h1></div>)

  }
};
```

8. Extend component from one to the another.

ex:
```js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
        { /* Renders what is inside a ChildComponent here */ }
      </div>
    );
  }
};
```

9. Use Component to Render

ex: 
```js
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Components that you includes within TypesOfFood component */}
        <Fruits />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// Render a component inside the HTML element.
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
```

10. MyComponent class extends to React.component.

- A class must extends to React.Component because that is how React recognize a current component. 

ex1:
```js
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
          <div id="challenge-node">
                 <h1>My First React Component!</h1>
          </div>
    );
  }
};
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));

```

11. Pass Props to a Stateless Functional Component

- Props: an argument of a prop.

```js
const CurrentDate = (props) => {
  return (
    <div>
      { /* print out the props.date that was received. */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Pass the date argument */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

12. Pass an array into a props.

- you can pass an array with a curly braces and brackets.

ex 1: Send a list to the ChildComponent
```js
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

ex2: Send a list and show outputs using .join().

```js
const List = (props) => {
  { /* show props.tasks in a paragraph. */ }
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

13. Set the default props

```react
MyComponent.defaultProps = { location: 'San Francisco' }
// Set the default props for the component called "MyComponent".
```

14. Override default props

```javascript
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={100}/>
    { /* Change code above this line */ }
  }
};
```

15. Type-checking with propTypes

ex1: you can set the propTypes in this format.
```javaScript
import PropTypes from 'prop-types';
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
```

16. React-Router-Dom

*How do you create a Router in react?*
- you can do that using react-router-dom package. 

-  Install 

```
npm add react-router-dom
```

-  Use the Router as below

a. import BrowserRotuer
b. Create a component
c. Use Route and set the path and componenet that it wants to show.

```js
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "Routes/Home";
import Facts from "Routes/Facts";
import Breeds from "Routes/Breeds";

export default () => (
    <Router>
        <Route path="/" exact component={Home} />            
        <Route path="/facts" exact component={Facts} />            
        <Route path="/breeds" exact component={Breeds} />            
    </Router>
);
```

- Redirect
  - Render to home

- Switch
  - Render one route at a time  

17. styled-components

*How to create HTML with Javascript?*
- you can use styled components or do it the traditional way with className

a. Install
```
npm add styled-components
```

18. styled-reset

- This will reset the style. 
```
npm add styled-reset
```

19. Aware Header

- Make header aware of the route.

20. Axios - fetch API

*How to I get data from API?*
- use Axios to fetch effectively
- you do not have to repeat the URL.
Ref: https://github.com/axios/axios

a. Install
```
npm add axios
```
b. 

21. Container-Presenter Pattern

- Container has the data, state, and api. 
  - it basically handles the logic
- Presenter is going to show the data. 
  - it is a functional components that presents the results. 

== End of Function ==
