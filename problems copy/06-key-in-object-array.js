/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

Polya's:
#1 - Write a function "keyInObjectArray" that takes and array of:
  #1.1 - Objects as first parameter.
  #1.2 - String as the second.
  #1.3 - Create a loop that iterates over each object.
#2 Should have a return.
  #2.1 - Will return "true" if any of the objects contain a key with
          them
  #2.2 - Will return "false" if it doesn't contain a key within them.
  #2.3 - Check for the key with the return.


***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  for(let obj of objArray){
    if(obj.hasOwnProperty(keyString)){
      return true;
    }
  }
  return false;
}

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
