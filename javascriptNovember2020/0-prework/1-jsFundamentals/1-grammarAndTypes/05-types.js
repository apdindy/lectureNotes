/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//BOOLEAN
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can rep: true/false, y/n, on/off, 0/1

//Undefined
/*
usually means a var has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/*
means a var has been declared and assigned a value of null
*/
var empty = null;
console.log(empty);

/*
Null and undefined both rep vars w no value inside.  think of it this way -- null values are for gag gifts that are boxes intentionally given w nothing inside bc that's the gag.  undefined values are gifts fiven when the person giving the gift has forgotten to put the gift inside (oops!)
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999;
console.log(precise);

let rounded = 99999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//any value within quotes; js spits out the val within the quotes
let stringOne = "double quotes";
let stringTwo = "single quotes";
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//Interpolation
//lets you use strings w dynamic content (they req backticks)

//ex 1:
let age = 32;
let string = `my age is: ${age}`
console.log(string);
