/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//what is a variable?
var a=1;
var b=2;
console.log(a + b);

//notes on naming variables;
//1) a var must begin w a letter, underscore, or $
//2) #s may follow the above characters, but cannot come first
//3) js is case sensitive - 'hello' and 'Hello' are different vars

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a var

Initializations refere to when a var is assigned a value

Assignment refers to giving a var a value.  This can be after initialization
*/

var x;
console.log('Declaration 1:', x); //undefined

x=10;
console.log('Initialization 1:', x); //10

x=33
console.log('Assignment 1:', x); //33

var y;
console.log(y);

y='hello';
console.log(y);

7='you are my fren';
console.log(y);

/*
Var, Let, and Const:

Var='old' keyword for vars
Let='new' keyword for vars (introduces w ES6)
const=also 'new', declares unchangeable vars (bucket w a lid)
*/

let tonight='great!';
const elevenFifty='Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely';
console.log(tonight, elevenFifty);




