# TypeScript
- Built on top of JavaScript
- Superset of JavaScript
- Specifies the types.
- Helps developers make less mistakes. 
- TypeScript will ensure the right types of inputs from the users. 

# TypeScript + React

1. Set types for inputs

ex1: Make sure that you only get type number inputs.
```ts
const plus = (a:number, b:number) => a+b;
console.log(plus(2,2));
// Output: 4
```
*What happens if you forget to put in numbers?*
- If users do not put inputs that were specified, TypeScript will point out the error.

ex2: Pointing out the wrong type error.
```
TSError: ⨯ Unable to compile TypeScript:
index.ts:3:18 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

3 console.log(plus("2",2));
```

2. Typing variables.

- you are telling that hello variable will always be a string.
```ts
let hello:string = "hello";
```

3. Set return types

ex1: Make a function return a string.
```ts
// return string on this function.
const greet = (name:string, age:number): string => {
  return `Hello ${name} you are ${age} years old`
}

console.log(greet("Nicolas", 18));
```

4. Interfaces
- If you create a new interface called human that only takes variables with certain type, it could reduce errors.

ex1: interface: IHuman
```ts

const nicolas = {
  name: 'Nicolas',
  age: 18,
  hungry: true
}

interface IHuman{
  name:string;
  // optional: age could be a number or undefined.
  age?:number;
  hungry:boolean;
}

const helloToHuman = (human: IHuman) => {
  console.log(`Hello ${human.name} you are ${human.age} old`)
}

helloToHuman(nicolas);

// Output: Hello Nicolas you are 18 old

```

*How do you install typescript in creat-react app?* 

Use interface

```ts
interface PlayerShape {
  name:string;
  age:string;
}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`;
// you can use all the object that is in the interface as long as the right type is given.

sayHello ({name:"nico", age:12});

// If you give a wrong typed argument, the error message will pop up saying that the wrong type was given.

```
- It is almost like a proptype but you are stating before code execute.

- 