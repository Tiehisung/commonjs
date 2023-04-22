// Math library

// maximum of a list of numbers
let maximumNum = Math.max(132, 3, 3325.88367, 89837, 41, 2);

let m = [12, 3, 641, 2].reduce((p, c) => (c > p ? c : p));
// console.log(maximumNum);

//Minimum of a list of numbers

let minimumNum = Math.min(3.6, 5.2002, 53, 0.8, 3.6, 3.4);
// console.log(minimumNum)

// Power or exponentiation
let power = Math.pow(0.5, 3);
// console.log(power)

let sqr = Math.sqrt(9);

// console.log(sqr)

let pi = Math.PI;

// console.log(pi)

// Ceil  ===> Upperlimit or roundup. It converts the decimal part into 1 and adds to the whole number part

let ceil_a = Math.ceil(2.12);

// console.log(ceil_a)
//floor         It ignores the decimal and returns the whole number
let fl1 = Math.floor(8.8);
// console.log(fl1);
// Random decimals

let rand = Math.random();
// console.log(rand);

// Random number from under 10
let rnd10 = Math.random() * 10;

let rnd10_int = Math.ceil(rnd10);

console.log(rnd10_int);

//random from range
