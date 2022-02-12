### Table of Contents  
1. [Introduction](#react)  
2. [Essentials](#essentials) 
3. [Functions](#function)
4. [Library](#library)
5. [Q&A](#q&a)

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

## 1. State
- State is where your data will be saved. State can be maintained as long as the page isn't refreshed.
    - ex) 
    a. Create a state called counter that hold a number.
    b. Create a button that add 1 to the counter.
    c. After a change of state, you can render a web page to show the change in a state.

## 2. setState
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

## 3. Change State

- When you want to change a state based on a current value, there are two ways of changing a state.
```js
// 1 - might cause unexpected updates
setCounter(counter+1);
// 2 - safer: protect against unexpected updates.
setCounter((current)=> current+1);
```
- If you are setting a completely new value, you can just put a new value as an argument.

## 4. Components

- Components are functions that you can use in react.
- You can either import or create them inside the same .js page.
```html
<script type="text/babel">
  // components
  function SaveBtn() {
    return <button>Save Changes</button>
  }
  function ConfirmBtn() {
    return <button>Confirm</button>
  }

  // you can re-use components inside the App().
  function App() {
    return (
      <div>
        <SaveBtn />
        <Confirm Btn />
      </div>
    )
  }
```

## 5. Props

- The props can pass values. This would eliminate a repetitive code.
- We can send data along to the props. This is very similar to arguments or parameters of a function.
```js
// example of sending props into a component

// we use {} because you are extracting prop.text
function Btn({text}) {
  console.log(text);
}

<Btn text={props}>
```

Example 1)

- Use props to create an event listener.

```js

// text state will be modified once an user click on Btn.
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <Btn styles = {{ color: green}} text={value} onClick={changeValue}>
    </div>
  )
}
```
*Whatever you send in the props, it does not automatically work. You have to use it.*

## 6. Memo

- You can create React.memo() to tell React to not re-render when there is no change on the prop. 
*This is useful when you do not want your page to render all components because it might slow the app down.*

## 7. PropTypes

- PropTypes allow us to check what is the type that we are receiving. It will notify you when mistyped information was passesd down. 

*How to declare a proptype?*

```js
// suppose there is already component called Btn

Btn.propTypes ={
  // only text prop can be passed.
  text: PropTypes.string,
  // only number prop can be passed.
  fontSize: PropTypes.number,
};
function App() {
  return 
    <Btn text =>
}

```
- Please refer to tye PropType documentation
https://reactjs.org/docs/typechecking-with-proptypes.html

- There are many propTypes that you can declare such as instanceOf(), objectOf() etc.

## 8. useEffect

useEffect() documentation:
https://ko.reactjs.org/docs/hooks-effect.html

### Problem 1: continuous re-rendering.
- When you get the API, you do not want to get the API everytime the value changes.
- Review: *when you change a state, the whole page renders.*
- Expectation: We need to run the API query first time when we run and do not run again. 

*What do we do if we want something to render only once?*
- useEffect() solves the problem because useEffect() will not be re-rendered even the state changes.
- useEffect() will only going to run 1 time.

### Problem 2: search API
- You want to implement search functionality to users.
- You only want to code to run only when user changes a specific state.
- If you would like code inside useEffect() to run when certain state changes, you can include them inside the bracket as below

```js
// state called keyword is created.
const [keyword, setKeyword] = useState("");
useEffect(()=> {
// will run if the test_state is changed.
},[keyword])
```

## 9. Cleanup functions

- you can use the state to either show or to hide code.

```js
// assume that the <Hello> component exist. As long as showing is true, it will show <Hello>. Otherwise, <Hello> component will disappear.
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
```
- Thankfully, in React, when you hide, it actually destroys to HTML for your convenient.
- In order to view what is being destroyed, you can use a cleanup function as below
```js
 useEffect(function () {
    console.log("hi :)");
    // this part of clean up function will run as the HTML is destroyed or hidden.
    return function () {
      console.log("bye :(");
    };
// Rewrite of the cleanup function
function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
```
## 10. Hooks

- Hooks are additional function in React that others have created for their convenience. 
- This is basically creating an add-on with useState() and useEffect() to make the job much easier. 
- You can download what others have created from npm website.

Hooks created:

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




# Quickstart:

## 0. NodeJS

- NodeJS comes with npm which helps you install packages.
- This is needed to install react.
*npx is optional but it helps keep less file to the computer.*

## 1. Create-react-app

- create-react-app is the quickest way to start a react app.
    - It run scripts to install many pre-configured files needed.

*How do I use create-react-app?*

- run 'npm global add create-ract-app'
- This is a global module that is not used often. It requires a frequent update.

```bash
npx create-react-app .
```

## 2. Exloror create-react-app

*How to start a development view?*
- run 'npm run start' in a bash terminal.
```bash
npm run start
```

*How does react app works?*
- inside public/index.html, there is <div id="root"></div>. 
- ReactDOM is basically convert JSX into html code and put them insdie the <div id="root">

## 3. Test create-react-app

- App.js is where all the app code will gather.
App.js
```js
import Button from "./Button"

function App() {
  return (
<div>
  <h1>Welcome back!!! </h1>
  <Button text={"Continue"}>
</div>
  );
}
```

- Button.js is created to create a button with a prop called text.
Button.js
```js
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  // import title class from styles to apply the CSS.
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
```

- .module.css is way to add css to JSX
Button.module.css:
```css
.title {
  color: white;
  background-color: tomato;
}
```

# Facts
 
- In React, everything is components. Components are functions.
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
*How do you fetch data from API?*
- Axios is a nice little layer on top of fetch. 
- Install: npm i axios.
ex1: get the JSON file from the API. 
```js
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
```

2. Styled-components

*How to create HTML with Javascript?*
- you can use styled components or do it the traditional way with className

a. Install
```
npm add styled-components
```


== End of Library ==

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

# Q&A

## 20220210: I get Error: error:0308010C:digital envelope routines::unsupported?
- You have to include --openssl-legacy-provider as below url says:
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

## How do you comment within JSX?
Comment in JSX.
- you use {/* */} to wrap around the comment text.
```js
const JSX = (
  <div>
  {/* I can comment within JSX*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
``` 

## How do you create a global styles?
*Please refer to the documentation on the link below for details:* https://scalablecss.com/styled-components-global-styles/

1. Create globalStyles.js
2. import createGlobalStyle from 'styled-components';
3. Set a global style. 
4. Place it on top of your React Tree in app.js so that it may be applied to all other components. 


## How do you get today's date?
```js

```

== End of Q&A ==