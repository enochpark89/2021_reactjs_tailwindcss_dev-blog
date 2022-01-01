# JavaScript
- JavaScript is originally designed for a browser. 
- JavaScript can be used both front and backend. 
- JavaScript - FrontEnd - the purpose of the JavaScript was originally to make the website interactive.
- There are many frameworks like ReactJs and VueJs that can save some time while designing the front-end of the web. 
- There are many framworks for backend such as NodeJS, NestJS, and others. 

# Advice
- Almost always, many JavaScript developers are experiencing same problems. If you search for the available function, it will most likely to be there. 
- When you are making a eventHandler, try to change the class that lead to the change of style rather than modifying the style itself. 
 

== Advice End ==

# Key Terms:

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
===Key Terms End===

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

== Regex End ==

# Key Concepts

1. Array: list of data.
```js
daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
```
2. console.log(<variable>): display what is inside the given variable.
3. console.dir(<variable>): display methods inside the given variable.
== Key Concepts End ==

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


== Key Concepts End==


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

== Function-list End ==
