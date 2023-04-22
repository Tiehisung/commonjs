/**
 * An array a collection of elements
 * js arrays unlike many other languages
 * do accept multiple types of data.
 *
 * Arrays are accessed using the square bracket and index notation
 */
let firstArray = ["go", "and", "come", "another", "day"];
let secondArray = [5, "little", "children", "want", 7.3, "minutes", "to play"];

// console.log(firstArray.at(3));  //Same as array[index] for accessing elements
// console.log(firstArray.length); //counts elements
// console.log(secondArray.concat(firstArray)); //Combine

// firstArray.shift(); //Removes first element
// console.log(firstArray);

// secondArray.splice(2, 2); // default without second number removes all from position in first
// console.log(secondArray);

// console.log(firstArray.includes("go")); //Check if the element is found

// firstArray.pop(); //Removes last element, undefined if empty
// console.log(firstArray);

// secondArray.sort();
// console.log(secondArray);

// nested arrays
let nested = [6, "man", [5, 6, 2, true], firstArray, 47.3, secondArray];

// console.log(nested.sort());
/**
 * Applications
 */

let tree = {
  roots: ["tap", "buttress", "terminal"],
  branches: ["middle", "side"],
  isFruited: true,
  name: "baobab",
};

// console.log(tree.roots.length)
console.log("All keys", Object.keys(tree));
console.log("All values", Object.values(tree));
