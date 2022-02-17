### Table of Contents
- [Introduction](#javascript)
- [Keywords](#keywords)
- [Essentials](#essentials)
- [Tips](#tips)
- [DOM](#dom)
- [Ajax](#ajax)
- [JQuery](#jquery)

# JavaScript

*What is Javascript?*  
- JavaScript is originally designed for a browser. 
- JavaScript can be used both front and backend. 
- JavaScript - FrontEnd - the purpose of the JavaScript was originally to make the website interactive.

*What can you do with JavaScript?*
- JavaScript can modify HTML and CSS contents or styles to make the website dynamic and interactive.
- There are many frameworks like ReactJs and VueJs that can save some time while designing the front-end of the web. 
- There are many framworks for backend such as NodeJS, NestJS, and others. 

*Why choose JavaScript?*
- JavaScript is the world's most popular programming language, which means a big community of developers available to help each other.

# keywords:

1. Falsy values: Values like [false, null, 0, "", undefined, and NaN]. 
2. Constructor:

Constructor conventions:
- Constructors are defined with a **capitalized name** to distinguish them from other functions that are not constructors.
- Constructors use the keyword **this** to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

ex 1: Constructor
```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

3. Prototype: Properties in the prototype are shared among ALL instance of a object.
```js
Bird.prototype.numLegs = 2;
// Bird's prototype "numLegs" is now set the two. 
```

4. own property vs prototype property
*own property* - object's own property that does not get inherited.
*prototype property* - object's prototype property that gets inherited. 
 

5. Don't Repeat Yourself (DRY)

- The reason repeated code is a problem is because any changes requires fixing code in multiple places. 

6. Inheritance 

- Supertype (or parent)
- Create an instance of Object
```javascript
let animal = new Animal();
```
- Alternative approache
```js
let animal = Object.create(Animal.prototype);
// if you create a new var with the same prototype, you are basically making that same constructor because usually prototype includes it. 
```
- Inherit prototype BEFORE setting it to the child object. 
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
```
7. The functions that take a function as an argument, or return a function as a return value are called **higher order** functions.

8. **Arity**: The arity of a function is the number of arguments it requires.
9. Currying: 

- Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.
- Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
```js
function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Add your code above this line
}
add(10)(20)(30);
```

10. Template literals

- Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.  

*Why use currying?*

- This is useful in your program **if you can't supply all the arguments to a function at one time.**
- You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.

11. Back tic

- If you use back tic, you can represent string. Also, you can insert variable inside the string as below:
```js
`Hello ${username}`;
// This will printe Hello and whatever inside the username var.
```

# Essentials

## 1. Output

- JavaScript can display data in different ways
1. innerHTML: show on the HTML tag element.
2. document.write(): show on the document.
3. windows.alert(): show a window alert.
4. console.log(): show on the consle tag on the browser or the command-line interface.

## 2. Statement

*Series of answered definition*
- A computer progarm is a list of "instructions" to be "executed" by a computer.
- These programming instructions are called statements.
- JavaScript program is a list of programming statements.
- In another word, a statement is a line of code.
```js
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
```

- **Semicolons** are necessary to close a statement.
```js
let a, b, c; 
```

- JavaScript ignores multiple spaces.
- Code Block is included in between { and }.

## 3. Syntax

- There are two types of values called *Literals (fixed values)* and *Variables(variable values).*

## a. Literals

- Examples of literals:
  1. Numbers
  2. Strings

## b. Variables

- **Variables** are used to store data values. 
- JavaScript uses the keywords var, let and const to declare variables.
- An equal sign is used to assign values to variables. 
```js
let x;
x = 6;
```
- JavaScript uses **arithmetic operators** ( + - * / ) to compute values:
```js
(5+6)*10
```
- JavaScript uses an **assignment operator** ( = ) to assign values to variables:
```js
let x,y;
x= 5;
y=6;
```
## c. Keywords
- JavaScript keywords are used to identify actions to be performed.

## d. Comments
- JavaScript statements marked as comments DO NOT execute.

## e. Camel Case
- Typically JavaScript develpers use Camel Case to create a variable. 
*What is a camel case?*
ex) FirstName, LastName, MasterCard, InterCity.

*JavaScript uses the Unicode character set.*

## 4. Comments

*What are comments?*

- Comments explain what JavaScript code does. Statements under comments are not executed.

```js
// Single-line comment
/*
Multi-line comments
*/
```

## 5. Variables

- There are 4 ways to declare a JavaScript Variable. 
  1. var
  2. let
  3. const
  4. nothing

- For var and let, you can modify data.
- For const, you CANNOT modify data.

```js
// var
var x = 5;

// let
let x = 6;

// const
const price = 3;

```
- All JavaScript variables have unique names called identifier.
- We use assignment operator(=) to assing values into varaibles.
- A variable declared without a value will have the value `undefined`

## 6. Let

*What is let?*
- The `let` was introduced in ES6.
- It has a Block Scope.
- Variables defined with let cannot be redeclared.
- You can reassign the value variables declared with `let`.

*What is the difference between let and var?*

- The difference between let and var is that 

1. let has more strict Block Scope than var.
```js
// The variable declared with var CAN be used outside the block, and the variable declared with let CANNOT be used outside a block.
{
  let x = 2;
}
// x can NOT be used here
{
  var x = 2;
}
// x CAN be used here
```

2. With var, you can re-declare variables. With let, you can NOT re-declare variables.
```js
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

## 7. Const

- Const variables cannot be redeclared or reassigned. 
- It has a Block Scope.
- JavaScript const variables must be assigned a value when they are declared:

*Const variable:*
```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

## a. Constant Arrays

- Oddly, you can change the constant array.
```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

## b. Constant Objects
- Oddly, You can also change the properties of a constant object:

```js
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

## 8. Operator
- Using the operator, you can perform calculations such as addition, subtraction, division, and multiplications.
- You can also concatenate strings.
- When you add a string and a number, it will be like two string

## 9. Arithmetics
- +	Addition
- -	Subtraction
- *	Multiplication
- **	Exponentiation (ES2016)
- /	Division
- %	Modulus (Remainder)
- ++	Increment
- --	Decrement

## 10. Assignment Operator
- = ; x = y
- +=; x = x + y
- -=; x = x - y
- *=; x = x * y
- /=; x = x / y
- %=; x = x % y

## 11. Data Types

- All data has types.
- JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```

## a. String
- A string (or a text string) is a series of characters like "John Doe".
```js
let carName1 = "Volvo XC60";   // Using double quotes
```

## b. Numbers

- Numbers can be written with, or without decimals:
```js
let x1 = 34.00; // Written with decimals
let x2 = 34; // Written without decimals
```

## c. Booleans
- Booleans can only have two values: true or false.

## d. Arrays
- JavaScript arrays are written with square brackets.
- Array items are separated by commas.
```js
const cars = ["Saab", "Volvo", "BMW"];
```

## e. Objects
- JavaScript objects are written with curly braces {}.

- Object properties are written as name:value pairs, separated by commas.
```js
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

```

## f. typeof Operator
- You can use the JavaScript typeof operator to find the type of a JavaScript variable.

```js
typeof "John Doe"     // Returns "string"
```

## 12. Function
- A JavaScript function is a block of code designed to perform a particular task.
*What construct a function?*
```js
// function keyword
// name of a function
// paramters that can be received from users.
function name(parameter1, parameter2, parameter3) {
  // code to be executed.
}
```
*What is the difference between a parameter and an argument?*
- Function parameters are listed inside the parentheses () in the function definition.
- Function arguments are the values received by the function when it is invoked.

## 13. Object

*What is object?*
- An *object* has *properties* and *methods*.

*What is the real-life examples?*
- In real life, a car is an object.
- A car has properties like weight and color, and methods like start and stop:
- All cars have the same properties, but the property values differ from car to car.
- All cars have the same methods, but the methods are performed at different times.

- In an object, you can assign many names and values as below
```js
const car = {type:"Fiat", model:"500", color:"white"};
```

*How do you access object properties?*
- You can access object properties in two ways.
1. objectName.propertyName
2. objectName["propertyName"]

ex: Person Object
```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

*What is **this** keyword?*
In a function definition, this refers to the "owner" of the function.

# 14. Events

*What are events?*
- HTML events are "things" that happen to HTML elements.
- When JavaScript is used in HTML pages, JavaScript can "react" on these events.
- You usually allows event handler attributes, with JavaScript code.
```js
// call an event handler directly.
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
```
// call an event with a function.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 

```
# 15. String

- A JavaScript string is zero or more characters written inside quotes.
```js
let text = "John Doe";
```

## a. String length

- To find the length of a string, use the built-in length property:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

## b. Escape Character
- \'	Single quote(')
- \"	Double quote(")
- \\	Backslash('\')

# 16. String Methods

- Developers work with string so many times. Strin methods help us to work with strings.

## a. Array.length

- The length property returns the length of a string:
```js
let txt = "ABCD";
let length = txt.length;
// output for lenth: 4
```

## b. String extractions

- There are 3 ways to extract string:
  1. slice(start, end)
  2. substring(start, end)
  3. substr(start, length)

### 1. slice()

- You can use slice() to put the index that you want to slice from a string.
```js
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7,13));
// Output: Banana 
```

- You can use a negetive index withint slice().
```js
let str = "Apple, Banana, Kiwi";
console.log(str.slice(-12, -6));
// Output: Banana
```

### 2. substring()

- substring() is similar to slice().

*What is the difference between .substring() and .slice()*
- The difference is that substring() cannot accept negative indexes.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);
// Output: Banana
```

### 3. substr()

- With substr(), you can put the start index and the length that you want to include.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);
// Output: Banana
```

### 4. .replace()

- The replace() method replaces a specified value with another value in a string:
```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

*How to replace only the first match?*
- By default, the replace() method replaces only the first match:
```js
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
// Output: Please visit W3Schools and Microsoft!
```

# 16. String Search

- Available Search Methods:
  - String indexOf()
  - String lastIndexOf()
  - String startsWith()
  - String endsWith()

## a. indexOf()

- The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
```js
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
// Output: 7 (because the word locate starts on the index of 7)
```

## b. lastIndexOf()

- The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
```js
let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate"));
// the last occurance of a specified text starts in an index of 21.
```

## c. search()

- The search() method searches a string for a specified value and returns the position of the match:

```js
let str = "Please locate where 'locate' occurs!";
str.search("locate");
// Output: 7
```

*Is indexOf() and search() equal?*

- The main difference is that indexOf() method cannot take powerful search values (regex).

## d. match()

- The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

```js
// regex indicates that you want to search a string for "ain"
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
// Output:ain,ain,ain 
```

## e. include()

- The includes() method returns true if a string contains a specified value.
```js
// returns true because it include a word "world"
let text = "Hello world, welcome to the universe.";
text.includes("world");
```

## f. startsWith()

- The startsWith() method returns true if a string begins with a specified value, otherwise false:

```js
// if the string text starts with "Hello," it will return true
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
// returns true.
```
## g. endsWith()

- The endsWith() method returns true if a string ends with a specified value, otherwise false:
```js
// Check if a string ends with "Doe":
var text = "John Doe";
text.endsWith("Doe");
```

# 17. String Templates

- The words that refer to String Templates are synonymous as below.
  - Template Literals
  - Template Strings
  - String Templates
  - Back-Tics Syntax

## a. Back-Tics Syntax

- Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
```js
// You can use back-tics to create a string variable.
let text = `Hello World!`;
```

## b. Quotes Inside Strings
- With template literals, you can use both single and double quotes inside a string:
```js
let text = `He's often called "Johnny"`;
console.log(text);
// Output: He's often called "Johnny"
```

## c. Multiline Strings
- Template literals allows multiline strings:
```js
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```

## d. Interpolation
- Template literals provide an easy way to interpolate variables and expressions into strings.

ex 1: Variable Substitutions
```js
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
```

ex 2: Expression Substitution
- You can also substitute for an expression that uses series of variables.
```js
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

## e. HTML Templates

- You can create an HTML template with the back-tic, but this way is not recommended.
```js
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```

# 18. Numbers
- JavaScript has only one type of number. Numbers can be written with or without decimals.
```js
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

## a. 64-bit Floating Point
- Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
- JavaScript numbers are always stored as **double precision** floating point numbers, following the international IEEE 754 standard.
- This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

## b. Integer Precision
- Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

```js
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

## c. Floating Precision

- To solve the problem above, it helps to multiply and divide:

```js
let x = (0.2 * 10 + 0.1 * 10) / 10;
```

## d. Adding Numbers and Strings
- If you add two numbers, the result will be a number:
```js
let x = 10;
let y = 20;
let z = x + y;
```

## e. Nan - Not a Number

- NaN is a JavaScript reserved word indicating that a number is not a legal number.

- If you try to do arithemetic with a non numeric string, it will result in NaN.

## f. JavaScript Numbers as Object

- Numbers can be defined as object as below:
```js
let x = 123;
let y = new Number(123);
```

# 19. Numbers methods

- Number methods help you work with numbers.

## a. toString()
- toString() converts Numbers into Strings.
```js
let x = 123;
x.toString();
console.log(typeof x);
// output: String
```
## b. toExponential()
- toExponential() returns a string, with a number rounded and written using exponential notation.
```js
let x = 9.656;
x.toExponential(2);
```
## c. toFixed()
- toFixed() returns a string, with the number written with a specified number of decimals:
```js
let x = 9.656;
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));
/*
Output:
9.7
3 9.656
4 9.65600
*/
```

## d. valueOf()

- valueOf() returns a number as a number.
```js
let x = 123;
x.valueOf();
```

## e. parseInt()

- parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

```js
parseInt("10"); // returns 10
parseInt("10.33"); // returns 10
```
## f. parseFloat()
- parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
```js
parseFloat("10"); // output: 10
parseFloat("10.33"); // output: 10.33
```
## g. other Number Properties

Number Properties

- MAX_VALUE:	Returns the largest number possible in JavaScript
- MIN_VALUE:	Returns the smallest number possible in JavaScript
- POSITIVE_INFINITY:	Represents infinity (returned on overflow)
- NEGATIVE_INFINITY:	Represents negative infinity (returned on overflow)
- NaN:	Represents a "Not-a-Number" value

# 20. Arrays
*What are arrays?*
- An array is a special variable, which can hold more than one value:

- An array can hold many values under a single name, and you can access the values by referring to an index number.

```js
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
/*
Saab
Volvo
BMW
*/
```

# 21. Array Method

- Array comes with a package of methods that can be used to help developers.

## a. toString()

- The JavaScript method toString() converts an array to a string of (comma separated) array values.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// Banana,Orange,Apple,Mango
```

## b. join()

- The join() method also joins all array elements into a string.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));
// Banana * Orange * Apple * Mango
```

## c. pop() and push()

1. pop()
- The pop() method removes the last element from an array:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);
// Output: (3) ['Banana', 'Orange', 'Apple']
```
- if assigned to the variable, it will return a value that was popped out.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruit);
// Output: Mongo
```
2. push()
- The push() method adds a new element to an array (at the end):
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
// (5) ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
```
- The push() method returns the new array length:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
// Output: 5
```

## d. shift() or unshift()

1. shift()
- The shift() method removes the first array element and "shifts" all other elements to a lower index.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);
// Output: (5) ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
```

- The shift() method returns the value that was "shifted out":

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(fruit);
// Output: Banana
```

2. unshift()

- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);
// output: (5) ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
```
- The unshift() method returns the new array length.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon"));
// Output: 5
```

## e. Change Elements

1. Change with accessing index.
- Array elements are accessed using their index number:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
```

2. Delete by delete()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
```
*delete() is not recommended as it leaves undefined holes in an array.*

3. Merging Arrays with concat()

- The concat() method creates a new array by merging (concatenating) existing arrays:
```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// output: (5) ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
```

4. Array splice with splice()

**Splice Insersion**
- The splice() method can be used to add new items to an array:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
/* 
(2): where new elements should be added. 
(0): defines how many elements should be removed.
("Lemon", "Kiwi"): new elements that are being added.
*/ 
```

*What does splice() method returns?*
- The splice() method returns an array with the deleted items:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// two deleted elements are returned.
console.log(fruits.splice(2, 2, "Lemon", "Kiwi"));
// Output: (2) ['Apple', 'Mango']

```

**Splice Deletion**
- With clever parameter setting, you can use splice() to remove elements *without leaving "holes"* in the array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);
// Output: (3) ['Orange', 'Apple', 'Mango']
```
5. Array slice with slice()

- The slice() method slices out a piece of an array into a new array.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// After slice, it will return the remaining array. IT WILL NOT MODIFY THE ORIGINAL ARRAY.
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);
```
# 22. Array Sort

## a. Sort an array alphabetically - sort()

- The sort() method sorts an array alphabetically:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// Output: (4) ['Apple', 'Banana', 'Mango', 'Orange']
```

## b. Sort an array in reverse order - reverse()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// After sorting the array alphabetically and then, reverse the order.
fruits.sort();
fruits.reverse();
```

## c. Numeric Sort

- By default, the sort() function sort values as string.

*How do you sort a number array?*
- You can use below trick to sort numbers in an ascending order.
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

*How do you sort a number array in a reverse order?*
- Use the same trick to sort an array descending:
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
```

*What is the name of the trick that you used?*

- The name is called "The Compare Function".
```js
function(a, b){return a - b}
```

*How do you find the maximum or minimum value within an array?*

```js
// Find a maximum value.
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

// Find a mimium value

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
// You can use Math.min.apply to find the lowest number in an array:
```
## d. Object Arrays

*How do you compare numeric properties within an object?*

- The solution is to write a compare function to compare the property values:
```js
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

console.log(cars.sort(function(a, b){return a.year - b.year}));
/*
0: {type: 'Saab', year: 2001}
1: {type: 'BMW', year: 2010}
2: {type: 'Volvo', year: 2016}
*/
```

*How do you compare string properties within an object?*
```js
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
console.log(cars.sort(function(a, b){
  // change to the lowercase so that by default all lowercase strings will be compared.
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}));
/*
0: {type: 'BMW', year: 2010}
1: {type: 'Saab', year: 2001}
2: {type: 'Volvo', year: 2016}
*/
```
# 23. Array Iteration

- Array iteration methods operate on every array item.

## a. forEach()

- The forEach() method calls a function (a callback function) once for each array element.

*forEach() will not modify the values inside an original array.*

```js
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction (value, index, array) {
  console.log(value, index, array);
};
/*
value: value inside an array.
index: 0-4
array: actual array that forEach() is trying to iterate. 

Output:
45 0 (5) [45, 4, 9, 16, 25]
VM135:6 4 1 (5) [45, 4, 9, 16, 25]
VM135:6 9 2 (5) [45, 4, 9, 16, 25]
VM135:6 16 3 (5) [45, 4, 9, 16, 25]
VM135:6 25 4 (5) [45, 4, 9, 16, 25]

*/
```

- Three arguments (in below orders):
1. The item value
2. The item index
3. The array inselft

## b. map()

- The map() method creates a new array by performing a function on each array element.
- The map() method does not execute the function for array elements without values.

- The map() method does not change the original array.

ex 1: 
```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((value)=> console.log(value));
/* output:
45
4
9
16
25
*/
```
ex 2: Assign to the value
```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers3 = numbers1.map((value)=> {return value*2});
console.log(numbers3);
```
## c. filter()

- The filter() method creates a new array with array elements that passes a test.
```js
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  // write a filter that you want to put.
  return value > 18;
}
console.log(over18);
// Output: (2) [45, 25]
```

## d. reduec()

- The reduce() method runs a function on each array element to produce (reduce it to) a single value.
- The reduce() method works from left-to-right in the array. See also reduceRight().


```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  // each iteration total will have the total+ value constantly added.
  return total+ value;
}
console.log(sum);
// Output: 99

```

*Function takes 4 arguments:*
- The total (the initial value / previously returned value)
- The item value
- The item index
- The array itself

*Please refer to the more test cases in MDN documentation.*

*Real used cases: (There are more but some are hard to understand)*

- Summing an Array Using reduce()
```js
const topSix = [
    { name: "Nigeria", position: "1st", points: 43 },
    { name: "England", position: "2nd", points: 37 },
    { name: "USA", position: "3rd", points: 35 },
    { name: "South Africa", position: "4th", points: 30 },
    { name: "Brazil", position: "5th", points: 27 },
    { name: "Korea", position: "6th", points: 23 }
]
 
const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
 
console.log(totalPoints) // Prints 195
```


## e. every()

- The every() method check if all array values pass a test.
```js
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)
// Output: false because some did not pass the test. If even one does not pass the test, the funciton will return false. 
```
*3 Arguments:*
- The item value
- The item index
- The array itself

- When a callback function uses the first parameter only (value), the other parameters can be omitted:

## f. some()
- The some() method check if some array values pass a test.

```js
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
// returns true because at least one passed the test in the callback function.
```
*Function takes 3 arguments:*
- The item value
- The item index
- The array itself

## g. indexOf()

- The indexOf() method searches an array for an element value and returns its position.

```js
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);
// Output: 1 because index of apple is 0 and you added 1.
```

## h. lastIndexOf()

- Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

```js
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position);
// Output: 3 because the last index of apple (there were two but the last index is referring to the apple of the last occurance) is 2 and you added 1.
```
## i. find()

- The find() method returns the value of the first array element that passes a test function.

```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);
// Output: 25
```

- *The find() will go through an array and return the first element that it finds that matches a criteria.*

## j. findIndex()
- The findIndex() method returns the index of the first array element that passes a test function.
```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);
// Output: 3 (index of the 25 in an array)
```
## k. from()

- The Array.from() method returns an Array object from any object with a length property or any iterable object.

```js
console.log(Array.from("ABCDEFG"));
// Output: (7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

## l. Keys()
- The Array.keys() method returns an Array Iterator object with the keys of an array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Array iterator created
const keys = fruits.keys();

console.log(keys);
// Output: Array Iterator {}

for (let x of keys) {
  console.log(x);
}
// 0,1,2,3 (indexes or keys returned)

```
## m. entries()

- You can use entries to iterate an object and get the key and the value.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (const [key,value] of Object.entries(fruits)) {
  console.log(`${key} : ${value}`);
}
/*
0 : Banana
1 : Orange
2 : Apple
3 : Mango
*/
```

## o. includes()
- ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
```

# 24. Array Const

- It has become a common practice to declare arrays using const:

```js
const cars = ["Saab", "Volvo", "BMW"];

```

- An array declared with const cannot be reassigned:
- The keyword const is a little misleading.
- It does NOT define a constant array. It defines a constant reference to an array.
- Because of this, we can still change the elements of a constant array.

ex 1: Reassign elements
```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.log(cars);
// Output: (4) ['Toyota', 'Volvo', 'BMW', 'Audi']
```

ex 2: Assigned when declared.
```js
cars = ["Saab", "Volvo", "BMW"];
var cars;
```

- An array declared with const has Block Scope.
ex 3: 
```js
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
```
- You CANNOT redeclare an array with const.
```js
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
```
# 26. Date Objects

- JavaScript Date Object lets us work with dates:
`Tue Feb 15 2022 08:32:56 GMT-0800 (Pacific Standard Time)`

## a. Create a Date object

ex 1: Create a date object
```js
const d = new Date();

```

- There are 4 ways to create a date object:
```js
// today's date
new Date()
// manual date
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

1. Create a Date by giving variables
- 6 numbers specify year, month, day, hour, minute, second:
```js
const d = new Date(2018, 15, 24, 10, 33, 30);
```
2. new Date(dateString)
```js
const d = new Date("October 13, 2014 11:13:00");
```
3. new Date(milliseconds)
- new Date(milliseconds) creates a new date object as zero time plus milliseconds:

```js
const d = new Date(100000000000);
```

## b. Create a Date object
- JavaScript will (by default) output dates in full text string format:
`Tue Feb 15 2022 08:32:56 GMT-0800 (Pacific Standard Time)`

ex 1: Display date in string - toString()
```js
const d = new Date();
console.log(d.toString());
// Output: Tue Feb 15 2022 08:51:35 GMT-0800 (Pacific Standard Time)
```

ex 2: Convert to UTC string
```js
const d = new Date();
console.log(d.toUTCString());
// Output: Tue, 15 Feb 2022 16:52:06 GMT
```

ex 3: Convert a date to a more readable format.
```js
const d = new Date();
console.log(d.toDateString());
// Output: Tue Feb 15 2022
```

ex 4: Convert a date to an ISO format - toISOString()
```js
const d = new Date();
console.log(d.toISOString());
// Output: 2020-02-15T08:51:35.816Z
```

# 27. Date Formats

- There are generally 3 types of JavaScript date input formats:
```
ISO Date:"2015-03-25" (The International Standard)
Short Date:	"03/25/2015"
Long Date:	"Mar 25 2015" or "25 Mar 2015"
```

## a. ISO Dates

- ISO 8601 is the international standard for the representation of dates and times.
- The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

ex 1: Full ISO dates
```js
const d = new Date("2015-03-25");
console.log(d);
// Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)
```

- You can also use the partial ISO syntax to create a date:
ex 2: Partial ISO dates
```js
const d = new Date("2015-03");
const d = new Date("2015");
```

ex 3: ISO Dates (Date-Time)

- ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

```js
const d = new Date("2015-03-25T12:00:00Z");
```

## b. Time Zones

- When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

- When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

## c. Parsing Dates

- If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
- Date.parse() returns the number of milliseconds between the date and January 1, 1970:

# 28. Date Get Methods

- These methods can be used for getting information from a date object:
```
getFullYear():	Get the year as a four digit number (yyyy)
getMonth():	Get the month as a number (0-11)
getDate():	Get the day as a number (1-31)
getHours():	Get the hour (0-23)
getMinutes():	Get the minute (0-59)
getSeconds():	Get the second (0-59)
getMilliseconds():	Get the millisecond (0-999)
getTime():	Get the time (milliseconds since January 1, 1970)
getDay():	Get the weekday as a number (0-6)
Date.now():	Get the time. ECMAScript 5.
```

ex 1: Get month
```js
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
// d.getMonth() returns the index or number of the month.
console.log(d.getMonth());
let month = months[d.getMonth()];
console.log(month);
```
- in the same way, you can use getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime(), getDay().

## b. UTC Date Methods
- getUTCDate()	Same as getDate(), but returns the UTC date
- getUTCDay()	Same as getDay(), but returns the UTC day
- getUTCFullYear()	Same as getFullYear(), but returns the UTC year
- getUTCHours()	Same as getHours(), but returns the UTC hour
- getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
- getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
- getUTCMonth()	Same as getMonth(), but returns the UTC month
- getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds

# 29. Set Date Methods

- Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
```
setDate():	Set the day as a number (1-31)
setFullYear():	Set the year (optionally month and day)
setHours():	Set the hour (0-23)
setMilliseconds():	Set the milliseconds (0-999)
setMinutes():	Set the minutes (0-59)
setMonth():	Set the month (0-11)
setSeconds():	Set the seconds (0-59)
setTime():	Set the time (milliseconds since January 1, 1970)
```

- You can modify a date object using SET methods. 

# 30. Math

- The JavaScript Math object allows you to perform mathematical tasks on numbers.

*Math properties available:*

- Math.E        // returns Euler's number
- Math.PI       // returns PI
- Math.SQRT2    // returns the square root of 2
- Math.SQRT1_2  // returns the square root of 1/2
- Math.LN2      // returns the natural logarithm of 2
- Math.LN10     // returns the natural logarithm of 10
- Math.LOG2E    // returns base 2 logarithm of E
- Math.LOG10E   // returns base 10 logarithm of E

## a. Math.round()

- Math.round(x) returns the nearest integer:
```js
console.log(Math.round(4.6));
// Output: 5
console.log(Math.round(4.4));
// Output: 4
```
## b. Math.ceil()

- Math.ceil(x) returns the value of x rounded up to its nearest integer:

```js
console.log(Math.ceil(4.4));
// Output: 5
```

## c. Math.floor()
- Math.floor(x) returns the value of x rounded down to its nearest integer:
```js
console.log(Math.floor(4.7));
// Output: 4
```

## d. Math.truc()

- Math.trunc(x) returns the integer part of x:
```js
console.log(Math.trunc(4.7));
// Output: 4 which is the integer part of 4.7.
```

## e. Math.sign()

- Math.sign(x) returns if x is negative, null or positive:
```js
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));
/* Output:
-1
0
1
*/
```

- There are many more Math methods that you can use to calcalate.

1. Math.pow()
2. Math.sqrt()
3. Math.abs()
4. Math.sin()
5. Math.cos()
6. Math.min() and Math.max()
7. Math.random()
8. Math.log()
- Math.log(x) returns the natural logarithm of x.
- The natural logarithm returns the time needed to reach a certain level of growth:
```
Math.log(1);
Math.log(3);
```
9. Math.log2()
10. Math.log10()

# 31. Random

*How do you create a random number?*
- Math.random() will help you achieve your objective.
- Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
```js
console.log(Math.random());
// Output could be ranging from 0 to 1 such as .05443232, .063412, .5588 etc.

```
*How do we create a random number?*

*How do you create a random generator ranging from 0 to 9*

1. Use Math.random() to create a random number between 0 and 1.
2. Multiply by 10 to create an integer between 0 and 9. (.99999 would result in 9.9999 so not 10)
3. Then, we use Math.floor() to get only the integer part of the number.

```js
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
```

*0 to 100?*
```js
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
```

- Using the logic above, they created a convention to calculate the random number given the max and the min.
```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// Example
function getRandInteger(5,10);
// Math.floor(Math.random() * (10 - 5) ) + 5;
// Math.floor(Math.random() * 5) + 5;
// Math.floor(Number between 0 to 1 * 5) + 5;
// Range from 0 to 4 + 5;
// Range from 5 to 9.
```

# 32. Booleans

- A JavaScript Boolean represents one of two values: true or false.

- For this, JavaScript has a Boolean data type. It can only take the values true or false.
  YES / NO
  ON / OFF
  TRUE / FALSE

## a. Boolean()

- You can use the Boolean() function to find out if an expression (or a variable) is true:
```js
console.log(Boolean(10 > 9));
// Output: true
```

## b. Comparisons and Conditions

- ==	equal to - if (day == "Monday")
- >	greater than - if (salary > 9000)
- <	less than	if - (age < 18)

## c. Everything without a "Value" is False

```js
let x = 0;
let x = "";
let x; // undefined
let x = null;

/* 
0, "", null, undefined, NaN, false are all false.
*/

```

## 33. Comparison and Logical Operators

- Comparison and Logical operators are used to test for true or false.

Examples of comparison operators:
- ==, ===, !=, !==, >, <, >=, <=
Logical operators:
&& (and), || (or), ! (not)

*What are the difference between == and ===?*
- == is used to compare two values.
- === is used to compare two values and their data types.

## 34. Conditions

- You can use `if` and `else` to create conditional statements.
  - Use if to specify a block of code to be executed, if a specified condition is true
  - Use else to specify a block of code to be executed, if the same condition is false
  - Use else if to specify a new condition to test, if the first condition is false
  - Use switch to specify many alternative blocks of code to be executed

## 35. Switch

- The switch statement is used to perform different actions based on different conditions.
```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```
## 36. Loop For
- Loops can execute a block of code a number of times.

```js
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```

*What kind of loops are available in JavaScript?*
  - for - loops through a block of code a number of times
  - for/in - loops through the properties of an object
  - for/of - loops through the values of an iterable object
  - while - loops through a block of code while a specified condition is true
  - do/while - also loops through a block of code while a specified condition is true

*What construct for loop?*
1. Statement1
- used to initialize the variable used in the loop.
2. Statement2
- used to evaluate the condition of the initial variable.
3. Statement3
- used to update the variable used in the loop. (usually in the form of increment or decrement)


## 37. For In

## a. The For In Loop
- The JavaScript for in statement loops through the properties of an object.
```js
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```

## b. The For In Arrays
- The JavaScript for in statement can also loop over the properties of an Array:
```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

## c. forEach()

- The forEach() method calls a function (a callback function) once for each array element.

- It DOES NOT change the original array.

 ## 38. For Of

 - The JavaScript for of statement loops through the values of an iterable object. (this is similar to For In)

- you can iterate over an array and string if you want to.

## 39. Loop While

- The while loop loops through a block of code as long as a specified condition is true.
```js
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

## a. Do While Loop

- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
```js
do {
  // code block to be executed
}
while (condition);
```

## 40. Break
- The `break` statement "jumps out" of a loop.
```js
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
// the loop will step when i ===3 because it has break that stops the loop
```
- `break` can be used on a switch.

- The `continue` statement "jumps over" one iteration in the loop.
- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
```js
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
```

## 41. Iterables
*What is iterables?*
- An iterable is an object that can be iterated over, meaning it can be looped over.
- For example, arrays are iterable objects.
- An object is iterable if it has a property called Symbol.iterator.

## a. For Of loop
- The JavaScript for..of statement loops through the elements of an iterable object.

- You can iterate over String, Array, Map, Set, TypedArray, and NodeList objects.
*What is a set?*
```js
const letters = new Set(["a","b","c"]);
```
*What is a map?*
```js
for (const x of fruits) {
  // code block to be executed
}
```



==End of Essentials==

# Tips

## 1. Output
- console.log(<variable>): display what is inside the given variable.
- console.dir(<variable>): display methods inside the given variable.



## OOP - Object Oriented Programming.

1. Prototype

- An Object inherit prototype from another object.
ex:
```js
// Animal and Bird Objects are created.
function Animal() { }
function Bird() { }

// Bird object inherited Animal.
Bird.prototype = Object.create(Animal.prototype);

// When duck var was created using Bird object, duck's constructoer shows as 'Animal'
let duck = new Bird();
console.log(duck.constructor)
```

- In this case, the prototypes need to manually changed to the appropriate ones.
ex:
```js
......
// Manually altering constructors of child objects.
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
```

- You can also inherit prototype function.
ex:
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }

// Bird obj inherit prototypes of Animal obj. which includes prototype.eat.
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Bird obj now is set prototype.fly of its own.
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

let duck = new Bird();
duck.eat();
duck.fly();
// output: 
"nom nom nom"
"I'm flying!"
```

- **Override** inherited method.
ex:
```js
// Animal and Bird objs created.
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Bird obj inherited Animal prototypes.
Bird.prototype = Object.create(Animal.prototype);

// Bird obj replaced Animal prototype.eat with a new one.
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

2. Mixins

- Instead of inheriting the method, you can simply inject the method using mixins as below.
ex:
```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

## Functional Programming

<!-- # Real case scenario

1.  -->

# Function-list

1. Remove items from an Array - Array.prototype.splice()

*Splice: (verb) join or connect by interweaving the strands*

- Use this when you want to remove items and keep the rest of the array.
- Remove any number of consecutive elements from anywhere in an array.
- DOES NOT changes the original array.

- Format: Array.splice(<index1>, <index2>)
  - Go to index1 and delete index2 amount of items following that.

ex1: splice with 2 parameters.
```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];\
let newArray = array.splice(3, 2);
// start from the index 3 delete 2 proceding 2 elements. 

console.log(newArray);
console.log(array);

/* output:
[ 'really', 'happy' ]
[ 'I', 'am', 'feeling' ]
*/

```
ex2: splice with 3 parameters

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// delete 1 element starting from the index 3 and add 13, 14 in place of that.
console.log(numbers);
//output: [ 10, 11, 12, 13, 14, 15 ].
```

2. Array.slice()

- slice the array into the sections that you want (from index x to y)
- The slice method does not mutate the original array, but returns a new one. 

ex1:
```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);
//output: ['snow', 'sleet']
// weatherConditions will remain the same.
```
- Please notice that the last index is NOT the last index but it is actually last index+1.

3. Spread Operator 

- [...array]: ES6's new spread operator allows us to easily copy all of an array's elements,  

ex1: copy an array.
```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);
// Output: [true, true, undefined, false, null]
```

ex2: concatenate an array
```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray);
//output: ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

4. Make Upper and Lower case - String.prototype.toLowerCase()

- toUpperCase(): make the string uppercase
- toLowerCase(): make the string lowercase. 

5. Copy an array from 1 to the another without referencing.

- copiedArr = arr1.slice(): copy arr1 as a while and assign it to copiedArr.

6. Convert a value into a boolean.

- JavaScript automatically convert a non-boolean to boolean value when you use non-boolean value in the if statement. To experiment how this conversion happens, you can use a method called Boolean() to convert.
```js
var x = Boolean(<value>);
// <value> is now converted to a boolean and stored in a variables called x. 
```

7. Array.filter() to filter the values in an array and return it.

- Array.filter() will filter the values using a conditional and return the value that satisfy the condition.

- Format: Array.filter(<condition>);

ex1: Select items that have greater length than 6.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

8. Array.prototype.includes()

- Array.prototype.includes() will check if the array contain a value that we are looking for. This works for string as well.

9. instanceOf

usage:
<var> instanceof <objectname>

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
// returns true.
```

10. Object.constructor

- <Object>.constructor returns the constructor of an object. 
ex1: check the constructor

```javascript
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

11. Shortcut in setting the prototype property

```javascript
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // This has to be set when used the prototype or the type will not be specified as a constructor.

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

12. Check the protoType

- If you want to know whether the variable has the same prototype as the object use the below code:
```javascript
Bird.prototype.isPrototypeOf(duck);
// This is true of Birs's prototype is same as duck's prototype.
```

13. Copy an array
- In order to create a copy of an array, you can use the destructuring method in ES6

```javascript
let arr = [1,2,3,4,5]

let newArr = [...arr];

console.log(newArr);
// Output: [ 1, 2, 3, 4, 5 ]
```

14. Iterate an array with .map() - Array.prototype.map()

- The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. 
- **It does this without mutating the original array.**

ex1: Obj modification
```javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);
// output: [ 'John', 'Amy', 'camperCat' ]
```

ex2: 
```js
const squareList = arr => {
  // Take an array > filter and map.
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

15. By using the unary operator + , we can easily convert a string into a number.
```js
let speed = "60";
console.log(typeof speed); //string
console.log(typeof +speed); //number
console.log(+speed); //60, not "60".
```

16. Iterate and use each element - Array.prototype.forEach()

- The forEach() method executes a provided function once for each array element.
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

17. Array.prototype.filter() 

- The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

18. Object.key()

- The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order 

that a normal loop would.

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

```

19. Array.reverse():
- The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

```

20. Object.prototype.hasOwnProperty()

- The hasOwnProperty() method returns a boolean if the Object has the specified property.

```js
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

```

21. Merge two arrays together - Array.prototype.concat()
*concatenate: (v.) link (things) together in a chain or series.*

ex1:
```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```

22. Array.prototype.reduce()

- The most general of all array operations in JavaScript
- Can solve anything with .reduce()

- Format:
  - The first argument is known as the accumulator, which gets assigned the return value of the callback function. 
  - The second is the current element being processed,
  - The third is the index of that element
  - The fourth is the array upon which reduce is called. 

ex1: reduce to total sum
```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

ex2: reduce the obj
```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
```
23. Parsing - parseInt(), parseFloat(), Number

- format:
  Number(<string>)
  parseInt(<string>)
  paseFloat(<string>)

- These will change the String into a number. 

24. Sort in arder - sort()

- There are two ways to sort the array (in ascending or descending order)
- *The side effect of the sort method is that it changes the order of the elements in the original array*

- Ascending order
ex1: Easy way
```js
arr.sort()
```

ex2: Recommended way from FreeCodeCamp.
```js
return .sort(function(a, b) {
  return a - b;
});
```

ex3: Descending order
```js
arr.sort().reverse()
```

25. Split a string into an array - split()

- The split method splits a string into an array of strings.

ex1: split with a whitespace
```js
var str = "Hello World";
var bySpace = str.split(" ");

```

ex2: split with a regular expression: digit
```js
var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
```

ex3: split with a regular expression: non-word character

- "/\W/" Matches any non-word character. This includes spaces and punctuation, but not underscores. It’s equivalent to "/[^A-Za-z0-9_]/"
```js
function splitify(str) {
  // Notice that regex does not require quotations around it.
  return str.split(/\W/);
  // alternative: return str.split(/[^A-Za-z0-9_]/);
}
splitify("Hello World,I-am code");
```

ex4: CMS site - conversion to urlSlug

Change a title sentence to a urlSlug format that follows below standards:
1. The input is a string with spaces and title-cased words
2. The output is a string with the spaces between words replaced by a hyphen (-)
3. The output should be all lower-cased letters
4. The output should not have any spaces

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    // split() whenever there are double whitespaces
    .split(/\s+/)
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

26. Combine an array into a string - join() - similar with split but opposite effect
- 

27. Remove whitespaces in a string - trim()

- The trim() method removes whitespace from both ends of a string.

ex1: Remove spaces
```js
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

```
28. Check ALL element with a condition - Array.prototype.every() 549

- The every method works with arrays to check if every element passes a particular test. It returns a Boolean value.

ex1:  
```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

ex2:
```js
function checkPositive(arr) {
  // Check whether all values inside an aary are possible or not.

  return arr.every(val => val > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

29. Check SOME element with a condition - Array.prototype.some()

- The some method works with arrays to check if any element passes a particular test. 
ex1:
```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

ex2: Return true if at least one value is positive.
```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(val=> val>0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

30. sumAll()

31. Get the max and min from an array - Math.min() and Math.max()

- The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
- The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

ex1: Get max
```js
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3

```

ex2: Get min
```js
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// expected output: 1

```

32. Get additional arguments - Array.from(arguments)


```js
// example: destroyer([1, 2, 3, 1, 2, 3], 2, 3)
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  // Get the additional arguments and return it as an array.
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
```

33. Get the parts of the string - String.prototype.substring()

- Get the partial string from index1 to index 2
- or from index1 to end of the string.

```js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

```

34. Translate CharCode() or UTF-16 code. 

a. Get Code from a character - String.prototype.charCodeAt()
```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```

b. Get a character from a Code - String.fromCharCode()


```js
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="


```

35. Iterate an Object - Object.entries()

- entries() will iterate each object element and get keys and values.

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

```

36. User Set constructor to remove duplicates from an array.

ex1: remove diplicates
```js
let uniq = [...new Set(newArr)];
```

37. Select from many options - switch

```js
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

```

38. Flatten an array - flat()

- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- you can flatten until the end of the array using flat(Infinity).
```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

```

39. Translate from binary code to string - fromCharCode(parseInt(bin,2))
- you can make binary character to real char using fromCharCode() and parseInt(bin, 2)

```js
function binaryAgent(str) {

let outputStr = str.split(' ') //Split string in array of binary chars
   .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
   .join(''); //Join the array back to a string

console.log(outputStr);
  return outputStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

40. Truthy Test- Check whether the value is valid or not - Boolean()

- check the object data whether it is truthy and valid.
```js
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```

41. Destructuring the arguments - arguments.

- In JavaScript, you can access the arguments without even stating them in the function as below:
```js
......
  const [first, second] = arguments;
  // assuming there were two arguments coming into this.function.
......

```

42. Validate data using .match()
ex1: 
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

// expected output: Array ["T", "I"]
```

43. Easily create a hash using new Map()
ex1:
```js
onst wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

44. Add class inside the HTML element with JS.
```js
<HTML tag queryselected>.classList.add("hidden");
// For the queryselected HTML tag, it will add [class="hidden"] inside the HTML tag. 
```

45. LocalStorage

- you can use the default localStorage to store some data for the users. 
*please check the localStorage documentation on the MDN*
1. setItem(): set data using the two arguments(key, value).
2. getItem(): query the existing item using the key argument.
3. removeItem(): remove the item that has the provided key argument. 
```js

```

46. Date()
- please look up the mdn website for date().
- link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  *Options:*
  1. new Date():
  ex1: create a new Date()
  ```js
  const date = new Date();
  // Output: Fri Sep 03 2021 13:39:58 GMT-0700 (Pacific Daylight Time)
  ```

  2. getDate():
  - Once the date is created, you can take out values that you want. 
  ```js
  date.getDay()
  // Output: print out today's date. For example: 16.
  ```

  3. .getHours():
  ```js
  date.getHours():
  // Output: print out hours. For example, 19.
  ```

  4. .getFullYear():
  ```js
  date.getMinutes()
  // Output: print out minutes. For example, 14.
  ```

  5. .getSeconds():
  ```js
  date.getSeconds()
  // Output: print out seconds. 
  ```

47. Add leading zeros with .padStart()
- takes two arguments.
- first argument takes in how many digits you want to fill. 
- second argument fill up digits with the given character.
ex1: fill in 20 spaces.
```js
"hello".padStart(20, "x")
// .padStart hill in the spaces with "x"s
// Output: "xxxxxxxxxxxxxxxhello" - total 15 spaces filled with "x"s
```

ex2: fill in 2 spaces to represent an electronic clock. 
```js
"1".padStart(2, "0")
// Output: "01"
```

48. Generate random number using Math.random()
- Math.random() will generate floating point number from 0 to 1. 
- Usually, in order to set the range, you multiply tha Math.random() by a number.

ex1: generate random number between 0 to 10.
```js
Math.random()*10;
// create a random decimal from 0 to 10. 
/* Probable Outputs:
8.4295467415662
4.524690155074831
*/
```
- Since this gives a floating point numbers, we need to convert them into a whole number. This can be accomplished with either .floor() or .ceiling().

```js
Math.floor(Math.random()*10);
// round up to the bottom number
Math.ceil(Math.random()*10);
// round up to the top number.

```

49. isNaN()
- is Not a number. It will print out to be true if the argument is not a number. 
```
if (isNaN(age)){

}
```

50. Event Listener
- You can make event listeners using addEventListener() function.
  - Events that you can choose from:
    Document:
    1. 

    **Windows:**
    1. mouseenter: when the mouse enters the browser window.
    2. mouserleave: when the mouse leaves the browser window.
    3. resize: when the size of the browser window is resized.
    4. copy: when the user copy or ctrl-c.
    5. online: when the wifi is on.
    6. offline: when the wifi is off.

51. Change style with JavaScript

- you can change the style using javascript suing element.style.

ex: change a color
```js
element.style.color = "blue";
```

52. Make the class active to change the style of an element. 

a. Add a class

```js
function handleTitleClick() {
  if (h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}
```

b. Make sure to add a class properly.
- when you make the className active, it will change the style.

*If you make the additional class like "class class2", there would be a problem.*
- classList is the solution.
- with classList, it has a very cool function such as contains. For example, if the class that we specified is in the class, click class. 

```js
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
```
- this conditional will check whether the class that they specified is already included or not. If included, the className stays.

c. Use toggle() function to shorten the code

```js
  function handleTitleClick() {
    h1.classList.toggle("clicked");
  }
```
- when you use .toggle, it will does the job of classList that we covered without writing a full code.

# Regex

1. Split between the Lowercase and Uppercase

ex1: Use Regex to split between the lowerCase and the uppercase
```js
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");
/*
Code Explanation
Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.
*/
```

ex2:
```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
/*
Code Explanation:
Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string
*/
```

2. Remove all special characters

- There are several ways to remove special characters from the string.
ex1: 
```javascript
string = string.replace(/[^a-zA-Z0-9]/g, '');
```

ex2:
```javascript
var desired = stringToReplace.replace(/[^\w\s]/gi, '')
```

3. Use the website that shows all the description regarding regex and it does the testing also. 

link: https://regex101.com/

# DOM

- When a web page is loaded, the browser creates a Document Object Model of the page.

- The HTML DOM model is constructed as a tree of Objects:
![DOM tree diagram!](/img/html_dom.gif)

*What is the DOM?*
- The DOM is a W3C (World Wide Web Consortium) standard.
- The DOM defines a standard for accessing documents:

*The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.*

- The W3C DOM standard is separated into 3 different parts:

  - Core DOM - standard model for all document types
  - XML DOM - standard model for XML documents
  - HTML DOM - standard model for HTML documents

*What is the HTML DOM?*

- The HTML DOM is a **standard object model** and programming interface for HTML. It defines:

  - The HTML elements as objects
  - The properties of all HTML elements
  - The methods to access all HTML elements
  - The events for all HTML elements
- In other words: **The HTML DOM is a standard for how to get, change, add, or delete HTML elements.**

# 1. Methods

- HTML DOM methods are actions you can perform (on HTML Elements).
- HTML DOM properties are values (of HTML Elements) that you can set or change.
- The HTML DOM can be accessed with JavaScript (and with other programming languages).
    - All HTML elements are defined as objects.
    - The programming interface is the properties and methods of each object.

```html
<!DOCTYPE html>
<html>
<body>

<h2>My First Page</h2>

<p id="demo"></p>

<script>
// .getElementByID() get the paragraph id named demo.
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

# 2. Document

- The HTML DOM document object is the owner of all other objects in your web page.
- The document object represents your web page.
- Below are some examples of how you can use the document object to access and manipulate HTML.

*How to access the HTML elements?*

- document.getElementById(id): Find an element by element id
- document.getElementsByClassName(name): Find elements by class name
- document.getElementsByTagName(name): 	Find elements by tag name

*How to change HTML elements?*
- element.innerHTML/element.innerText: Change the inner HTML of an element
- element.style.property = "new style": Change the style of an HTML element
- element.attribute = "new value": Change the attribute value of an HTML element

*How to add and delete elements?*
- document.createElement(element): Create an HTML element
- document.removeChild(element): Remove an HTML element
- document.appendChild(element): Add an HTML element

*How to find HTML Objects?*
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

# 3. Elements

- To manipulate HTML elements, you have to find the element first. There are several ways of finding an element.

## a. Find by Id
```html
<!-- Select with ID. -->
const element = document.getElementById("intro");
```

## b. Find by Tag Name

```html
<!-- get element by a tag name: select all <p>-->
const element = document.getElementsByTagName("p");
```

## c. Find by a ClassName

```html
const x = document.getElementsByClassName("intro");
```

## d. CSS Selector
```html
const x = document.querySelectorAll("#id");
const x = document.querySelectorAll(".class");
```

## e. DOM HTML

- The easiest way to modify the content of an HTML element is by using the innerHTML property.


```html
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
```

# 4. HTML

1. Change HTML Content

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

</body>
</html>
```


2. Change Value of an Attribute

```html
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
// Convention: document.getElementById(id).attribute = new value
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
```

3. Document.write()
In JavaScript, document.write() can be used to write directly to the HTML output stream:
```html
<!DOCTYPE html>
<html>
<body>

<p>Bla bla bla</p>

<!-- Must be used within the <script> element -->
<script>
document.write(Date());
</script>

<p>Bla bla bla</p>

</body>
</html>
```

# 4. Forms

- HTML form validation can be done by JavaScript.

1. Empty

```js
function validateForm() {
  // if document form element > name:myForm > name:fname value is empty, create an alert. 
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
```

```html
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
```

# 5. CSS

- Style can be modified using DOM.

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

</body>
</html>
```

# 6. Animation

- Animation can be created using a JavaScript.

ex: Make the box move across the canvas.
```css
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background: red;
}
```

```js
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
```

# 7. Events

- HTML DOM allows JavaScript to react to HTML events:

1. onClick

- To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

ex:
```html
<!DOCTYPE html>
<html>
<body>

<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

</body>
</html>
```
2. onmouseover and onmouseout

- You can create an event when the mouse enters a certain area and when the mouse moves out a certain area.

# 8. EventListener

- There is another way to activate an event. You can use addEventListener() method.

1. addEventListener()

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html> 

```

- You can add Many Event Handlers to the Same Element.

2. removeEventListener()

```js
// this will deactivate an event listener.
element.removeEventListener("mousemove", myFunction);
```

# 9. Navigation

- With the HTML DOM, you can navigate the node tree using node relationships.

## a. Node Relationships

- The nodes in the node tree have a hierarchical relationship to each other.
Rules:
  - The top node is called the root.
  - Every node has exactly one parent, except the root. 
  - Siblings are nodes with the same parents.


Node in HTML documents:
  `<html>` is the root node
  `<html>` has no parents
  `<html>` is the parent of `<head>`and `<body>`
  `<head>` is the first child of `<html>`
  `<body>` is the last child of `<html>`

## b. Navigate nodes

- You can use the following node properties to navigate between nodes with JavaScript:

- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

ex 1: Get a value of a first child.

```html
myTitle = document.getElementById("demo").firstChild.nodeValue;
```

ex 2: Get a value of nth child of your choice.

```html
myTitle = document.getElementById("demo").childNodes[0].nodeValue;
```

ex 3: Document 
```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p>Displaying document.documentElement</p>

<p id="demo"></p>

<script>
// This will repain or re-render <h2> and <p> in <p id="demo">
document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
</script>

</body>
</html>
```

ex 4: nodeName Property

The nodeName property specifies the name of a node.

NodeName is
- read-only
- an element node is the same as the tag name
- an attribute node is the attribute name
- a text node is always #text
- the document node is always #document
```html
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
</script>
```

# 10. Nodes

- You can add/remove nodes or HTML elements.

1. Append

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
  // create element or a node and append it to an existing element.
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
```

2. Remove

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
```

3. Replace
```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
// replace exisiting child with another. (horrible)
parent.replaceChild(para, child);
</script>
```

# 11. Collections

- The getElementsByTagName() method returns an HTMLCollection object.

- An HTMLCollection object is an array-like list (collection) of HTML elements.

- You can get collection of certain element and you can access them with an index number. 

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Norway!</p>

<p id="demo"></p>

<script>
const myCollection = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;

</script>

</body>
</html>
```

# 12. Node Lists

- Like HTML collections, you can use querySelectorAll() function to get a node list.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Norway!</p>

<p id="demo"></p>

<script>
// select all elements that are p.
const myNodelist = document.querySelectorAll("p");

document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[1].innerHTML;

</script>

</body>
</html>

```

# Ajax

- With Ajax, 
1. you read data from a web server after the page has loaded 
2. update a web page without reloading the page
3. send data to a web server in the background.

ex:
```js
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

*What is Ajax?*
- Ajax stands for Asynchronous JavaScript And XML. 
- Ajax is NOT a programming language
- Ajax just uses a combination of 
    1. A browser built-in XMLHttpRequest object (to request data from a web server)
    2. JavaScript and HTML DOM. 

Steps:
1. A browser sends a request to the server.
2. Server process HTTPrequest and give responses.
3. A browser receives a data, JS process data, and update page content.

# 1. XMLHttp

*What is XMLHttpRequest object?*
-  The XMLHttpRequest object can be used to exchange data with a web server behind the scenes.
*This means that it is possible to update parts of a web page, without reloading the whole page.*

- The keystone of AJAX is the XMLHttpRequest object.

1. Create an XMLHttpRequest object
2. Define a callback function
3. Open the XMLHttpRequest object
4. Send a Request to a server

1. Send a Request

```html
xhttp.open("GET", "ajax_info.txt");
xhttp.send()
```

ex:
```js
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

- For security reasons, modern browsers do not allow access across domains.
- This means that both the web page and the XML file it tries to load, must be located on the same server.

# 2. XMLHttpRequest

- The XMLHttpRequest object is used to request data from a server.

1. Send a request to a server

format:
```js
// open(method, url, async) - specifies the type of request.
// url - an address to a file on a server.
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

*What is it mean to send a request asynchronously?*
- By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:

Benefits:
- execute other scripts while waiting for server response
- deal with the response after the response is ready

2. GET request

```html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>

<script>

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  // onload occurs when the data is loaded.
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  // send a GET request to the server and retrieve data from demo_get.asp
  xhttp.open("GET", "demo_get.asp");
  xhttp.send();
}
</script>

</body>
</html>

```

*How to avoid a cached result?*
```js
xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();
```

*How do you want to send information with GET request?*
```js
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();
```

3. POST requests

- To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

```js
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
```

4. Synchronous Request

- To execute a synchronous request, change the third parameter in the open() method to false:

# 3. Server Response

1. responseText

- The responseText property returns the server response as a JavaScript string, and you can use it accordingly:

```js
document.getElementById("demo").innerHTML = xhttp.responseText;
```

2. responseXML

- The XMLHttpRequest object has an in-built XML parser.
- The responseXML property returns the server response as an XML DOM object.
```html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<p id="demo"></p>
 
<script>
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("ARTIST");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
</script>

</body>
</html>

```
3. getAllREsponseHeader()

- The getAllResponseHeaders() function returns all the header information of a resource, like length, server-type, content-type, last-modified, etc:
```html
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<p>The getAllResponseHeaders() function returns all the header information of a resource, like length, server-type, content-type, last-modified, etc:</p>

<p id="demo"></p>

<script>
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("demo").innerHTML =
  this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
</script>

</body>
</html>

```
4. XMLHttpRequest

- The getResponseHeader() function is used to return specific header information from a resource, like length, server-type, content-type, last-modified, etc:

```js
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p>The getResponseHeader() function is used to return specific header information from a resource, like length, server-type, content-type, last-modified, etc:</p>

<p>Last modified: <span id="demo"></span></p>

<script>
const xhttp=new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("demo").innerHTML =
  this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
</script>

</body>
</html>

```

# 4. XML file

- Suppose that there is XML file called "cd_catalog.xml," you can retrieve data and display as below

```js
function loadDoc() {
  // 1. create XMLHttpRequest. When the data loads, it executes myFunction and pass data as an argumet.
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  // 
  const xmlDoc = xml.responseXML;
  // Get a tag named CD
  const x = xmlDoc.getElementsByTagName("CD");
  // Create a table with an Artist and a Title headers.
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  // navigate each row of CD and Get Artist and Title information and display as a table.
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
```
cd_catalog.xml:
```xml
<CATALOG>
<CD>
<TITLE>Empire Burlesque</TITLE>
<ARTIST>Bob Dylan</ARTIST>
<COUNTRY>USA</COUNTRY>
<COMPANY>Columbia</COMPANY>
<PRICE>10.90</PRICE>
<YEAR>1985</YEAR>
</CD>
<CD>
<TITLE>Hide your heart</TITLE>
<ARTIST>Bonnie Tyler</ARTIST>
<COUNTRY>UK</COUNTRY>
<COMPANY>CBS Records</COMPANY>
<PRICE>9.90</PRICE>
<YEAR>1988</YEAR>
</CD>
```

# 5. PHP and ASP

- In the same way, you can call .php or .asp files. 

# 6. Database

- You can ask for a request for .php using the Javascript and get a result using the php as below

```php
<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>
```

# JQuery

*What is JQuery?*

- jQuery is a JavaScript Library.
- jQuery greatly simplifies JavaScript programming.

ex:
```js
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

```

*Why JQuery was made?*

- The purpose of jQuery is to make it much easier to use JavaScript on your website.
- jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

Features on JQuery:
- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

# 0. Quickstart

*How do you implement jQuery?*

1. Download jQuery from jQuery.com
2. Implement as below:

```js
<head>
<script src="jquery-3.5.1.min.js"></script>
</head>
```

*How do you implement jQuery without downloading?*

- If you do not want to download jQuery, you can include it from a CDN as below:
```js
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

# 1. Syntax

- The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax:
```js
$(selector).action()
/*
A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
*/
```

- You might have noticed that all jQuery methods in our examples, are inside a document ready event:

```js
$(document).ready(function(){

  // jQuery methods go here...

});
```

- This is to prevent any jQuery code from running before the document is finished loading (is ready).

- If actions run before document is fully loaded, below errors can occur.

Errors:
- Trying to hide an element that is not created yet
- Trying to get the size of an image that is not loaded yet

# 2. Selectors

- jQuery selectors allow you to select and manipulate HTML element(s).

## a. Element Selector

```js
// select p element. 
$("p")
```

ex: hide an element when a button is clicked.
```js
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```

## b. ID Selector

- The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.

```js
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
```

## c. Class Selector

- The jQuery .class selector finds elements with a specific class.

```js
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```

# 3. Event

*What are Event?*

- All the different visitors' actions that a web page can respond to are called events.

Examples:
- moving a mouse over an element
- selecting a radio button
- clicking on an element

## Commonly Used jQuery Event Methods:

1. $(document).ready()

- The $(document).ready() method allows us to execute a function when the document is fully loaded. This event is already explained in the jQuery Syntax chapter.


2. click()

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
// When you click on the p, it will disappear or hide.
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</body>
</html>

```

3. dbclick() - Double-click

```html
<!-- When you double-click, p element will hide in the docujment. -->
<script>
$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});
</script>
```

4. Others

- Other events work in a similar way as click() and dbclick()

- mouseenter()
- mouseleave()
- mousedown()
- mouseup()
- hover()
- focus(): The focus() method attaches an event handler function to an HTML form field.
```js
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});
```

- blur(): The blur() method attaches an event handler function to an HTML form field.
```js
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});
```

5. on() Method

- The on() method attaches one or more event handlers for the selected elements.

```js
// attach multiple event handlers in one element.
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
```

# 4. Hide/Show

- With jQuery, you can hide and show HTML elements with the hide() and show() methods:

```html

<script>
// Click to hide / Click to show
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
</script>
```

## a. Set hide speed

Format: 
```js
$(selector).hide(speed,callback);
```

Example:
```js
$("button").click(function(){
  $("p").hide(1000);
});
```

## b. toggle()

- You can also toggle between hiding and showing an element with the toggle() method.

```js
$("button").click(function(){
  $("p").toggle();
});
```

# 5. Fade

- With jQuery you can fade an element in and out of visibility.

- jQuery has the following fade methods:

    - fadeIn()
    - fadeOut()
    - fadeToggle()
    - fadeTo()

## a. fadeIn()

- The jQuery fadeIn() method is used to fade in a hidden element.

```js
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

## b. fadeOut()

- The jQuery fadeOut() method is used to fade out a visible element.

- With jQuery you can fade an element in and out of visibility.

- jQuery has the following fade methods:

  - fadeIn()
  - fadeOut()
  - fadeToggle()
  - fadeTo()

1. fadeIn()
```js
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

2. fadeOut()
```js
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```

3. fadeToggle()
```js
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```

4. fadeTo()
Syntax:
```js
$(selector).fadeTo(speed,opacity,callback);
```

```js
$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});
```

# 6. Slide

- The jQuery slide methods slide elements up and down.

- jQuery has the following slide methods:

- slideDown()
- slideUp()
- slideToggle()

Syntax:
```js
$(selector).slideDown(speed,callback);
```

1. slideDown()
- The jQuery slideDown() method is used to slide down an element.

Syntax:
```
$(selector).slideDown(speed,callback);
```

ex: 
```js
$("#flip").click(function(){
  $("#panel").slideDown();
});
```

2. slideUp()

- The jQuery slideUp() method is used to slide up an element.
*Syntax similar as slideDown()*
```js
$("#flip").click(function(){
  $("#panel").slideUp();
});
```

3. slideToggle()
- The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
*Syntax similar as slideDown()*

```js
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

# 7. Animate

- The jQuery animate() method is used to create custom animations.
Syntax:
```js
$(selector).animate({params},speed,callback);
```

## a. Animate Left
```js
$("button").click(function(){
  $("div").animate({left: '250px'});
}); 
```

## b. Animate left and change properties

```js
$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
}); 
```

## c. Anmate to hide

```js
$("button").click(function(){
  $("div").animate({
    height: 'toggle'
  });
}); 
```

## d. Multiple Animation

- By default, jQuery comes with queue functionality for animations. (run animation one by one)

```js
$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 
```
## e. Animation and Text change
```js
$("button").click(function(){
  var div = $("div");
  div.animate({left: '100px'}, "slow");
  div.animate({fontSize: '3em'}, "slow");
}); 
```

# 8. Stop()

- The jQuery stop() method is used to stop an animation or effect before it is finished.
- The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.
Syntax:
```js
$(selector).stop(stopAll,goToEnd);
```
ex:
```js
$("#stop").click(function(){
  $("#panel").stop();
});
```

# 9. Callback

- A callback function is executed after the current effect is 100% finished.
- The callback function can be usually inputted as a second argument.

```js
$("button").click(function(){
  $("p").hide("slow", function(){
    alert("The paragraph is now hidden");
  });
});
```

# 10. Chaining

- With jQuery, you can chain together actions/methods.
- Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
*Tip: This way, browsers do not have to find the same element(s) more than once.*
```js
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
// or you can write as below
$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```

# 11. GET

- jQuery contains powerful methods for changing and manipulating HTML elements and attributes.
- jQuery can manipulate DOM.
*Review: What is DOM?*
- DOM = Document Object Model
- The DOM defines a standard for accessing HTML and XML documents:

## a. Get Content -  text(), html(), and val()

```js
// Text will appear as an alert
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
// HTML will appear as an alert
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
// A value will appear as an alert
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
```

## a. Get Attribute

```js
// Get an attribute of a tag with an ID #w3s
$("button").click(function(){
  alert($("#w3s").attr("href"));
});
```

# 12. Add

- We will look at four jQuery methods that are used to add new content:
    - append() - Inserts content at the end of the selected elements
    - prepend() - Inserts content at the beginning of the selected elements
    - after() - Inserts content after the selected elements
    - before() - Inserts content before the selected elements

1. append()

- append() will add or insert at the end of the selected HTML element.

```js
// append or add text to an element p
$("p").append("Some appended text.");
```

2. prepend()

- prepend() method inserts content at the beggining of the selected HTML elements.

```js
$("p").prepend("Some prepended text.");
```

3. Add Several elements - append(), prepend()

```js
function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}
```

4. after() and before()

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("img").before("<b>Before</b>");
  });

  $("#btn2").click(function(){
    $("img").after("<i>After</i>");
  });
});
</script>
</head>
<body>

<img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140"><br><br>

<button id="btn1">Insert before</button>
<button id="btn2">Insert after</button>

</body>
</html>

```

5. Several new elements - after() and before()

```js
function afterText() {
  var txt1 = "<b>I </b>";                    // Create element with HTML 
  var txt2 = $("<i></i>").text("love ");     // Create with jQuery
  var txt3 = document.createElement("b");    // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}
```

# 13. Remove

- To remove elements and content, there are mainly two jQuery methods:

    - remove() - Removes the selected element (and its child elements)
    - empty() - Removes the child elements from the selected element

1. remove()
```js
$("#div1").remove();
```

2. empty()
```js
$("#div1").empty();
```

3. Remove elements with a class name
```js
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").remove(".test");
  });
});
</script>
```

# 14. Classes

- jQuery has several methods for CSS manipulation. We will look at the following methods:

  - addClass() - Adds one or more classes to the selected elements
  - removeClass() - Removes one or more classes from the selected elements
  - toggleClass() - Toggles between adding/removing classes from the selected elements
  - css() - Sets or returns the style attribute

1. addClass()

```js
// Add classes to h1, h2, p, and div.
$("button").click(function(){
  $("h1, h2, p").addClass("blue");
  $("div").addClass("important");
});
```

2. removeClass()

```js
$("button").click(function(){
  $("h1, h2, p").removeClass("blue");
});
```

3. toggleClass()

- Create a toggle that will alternate between adding and removing classes.

```js
$("button").click(function(){
  $("h1, h2, p").toggleClass("blue");
});
```

# 15. css()

- The css() method sets or returns one or more style properties for the selected elements.

1. Return CSS property

```html
<script>
// Once clicked, it returns css property called background-color via alert.
$(document).ready(function(){
  $("button").click(function(){
    alert("Background color = " + $("p").css("background-color"));
  });
});
</script>
```

2. Set a CSS Property

```html
<script>
// once clicked, set p element backgroudn color to be "yellow"
$(document).ready(function(){
  $("button").click(function(){
    $("p").css("background-color", "yellow");
  });
});
</script>
```

3. Set Multiple CSS Properties.

```html
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").css({"background-color": "yellow", "font-size": "200%"});
  });
});
</script>
```

# 16. Dimensions

- jQuery has several important methods for working with dimensions:

    - width()
    - height()
    - innerWidth()
    - innerHeight()
    - outerWidth()
    - outerHeight()

1. Width() and height()

- The width() method sets or returns the width of an element (excludes padding, border and margin).
- The height() method sets or returns the height of an element (excludes padding, border and margin).

```js
$("button").click(function(){
  var txt = "";
  txt += "Width: " + $("#div1").width() + "</br>";
  txt += "Height: " + $("#div1").height();
  $("#div1").html(txt);
});
```

2. innerWidth() and innerHeight()
- The innerWidth() method returns the width of an element (includes padding).
- The innerHeight() method returns the height of an element (includes padding).

```js
$("button").click(function(){
  var txt = "";
  txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
  txt += "Inner height: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});
```

3. width() and height()

- You can get the width() of a document and a window.

```js
$("button").click(function(){
  var txt = "";
  txt += "Document width/height: " + $(document).width();
  txt += "x" + $(document).height() + "\n";
  txt += "Window width/height: " + $(window).width();
  txt += "x" + $(window).height();
  alert(txt);
});
```

- Set width and height size

```js
$("button").click(function(){
  $("#div1").width(500).height(500);
});
```

# 17. Traversing

- jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements. 
- You can traverse using the parent-child-descendant relationship

## a. Ancesters

1. parent()

- The parent() method returns the direct parent element of the selected element.
```js
$(document).ready(function(){
  $("span").parent();
});
```

2. parents()

- The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).

```js
$(document).ready(function(){
  $("span").parents();
});
```

3. parentsUntil()

- The parentsUntil() method returns all ancestor elements between two given arguments.
```js
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```

## b. Descendants

1. children()

- The children() method returns all direct children of the selected element. (one traversal)

```js
$(document).ready(function(){
  $("div").children();
});
```

2. find()

- The find() method returns descendant elements of the selected element, all the way down to the last descendant.

```js
// return all <span> elements that are descendants of <div>
$(document).ready(function(){
  $("div").find("span");
});
```

3. Return all descendants 
```js
$(document).ready(function(){
  $("div").find("*");
});
```

## c. Siblings

1. siblings()

- The siblings() method returns all sibling elements of the selected element.
```js
$(document).ready(function(){
  $("h2").siblings();
});
```

2. next()
- The next() method returns the next sibling element of the selected element.
```js
$(document).ready(function(){
  $("h2").next();
});
```

3. nextAll()

- The nextAll() method returns all next sibling elements of the selected element.

```js
$(document).ready(function(){
  $("h2").nextAll();
});
```

4. nextUntil()

- The nextUntil() method returns all next sibling elements between two given arguments.

```js
// returns all sibling elements between a <h2> and a <h6> element:
$(document).ready(function(){
  $("h2").nextUntil("h6");
});
```

## d. filter

- The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.

1. first()
- The first() method returns the first element of the specified elements.

```js
$(document).ready(function(){
  $("div").first();
});
```

2. last()
- The last() method returns the last element of the specified elements.

```js
$(document).ready(function(){
  $("div").last();
});
```
3. eq()
- The eq() method returns an element with a specific index number of the selected elements.
```js
$(document).ready(function(){
  $("p").eq(1);
});
```

4. filter() - return only ones that match the criteria.
```js
$(document).ready(function(){
  $("p").filter(".intro");
});
```
5. not() - return only ones that DOES NOT match the criteria.
```js
$(document).ready(function(){
  $("p").not(".intro");
});
```