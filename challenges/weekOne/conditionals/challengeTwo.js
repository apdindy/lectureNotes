// let myString = "this is a string";
// let myNumber = 10;
// let myBoolean = true; //only 2 values t/f y/n
// let myArray = [10, "string", [] ];
// let myObject = {firstKey: "a string"} //curlyboys haha
// let myUndefined = undefined; //unintentional empty valuenj
// let myNull = null; //want value empty

// console.log(typeof myString);

/*
CHALLENGE 2
Types Challenge
​
​
BRONZE
​
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
​
​*/

let myObject = {
    string: "String",
    number: 15,
    boolean: true,
    object: {}
}

console.log(typeof myObject.number)

/*
--------------------------------------------------------------------------
​
SILVER
​
​
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let value = myObject.string;

 if (value === "string") {
    console.log('The value is a string');
 } else if (value === "number") {
    console.log("The value is a number");
 } else if (value === "boolean") {  
    console.log("the value is a boolean");
 } else if (value === "object") {
     console.log("The value is an object");
} else {
    console.log("What are you?")
}





