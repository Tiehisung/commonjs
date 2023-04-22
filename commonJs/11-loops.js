// Loops are a way of repetitively traversing through a data structue

// There two types
// 1. Definite 2. Indefinite loops

// Indefinite loops eg. while, do while

// While

let acc = 89;
// while (acc >= 5) {
//   console.log("You can buy food with ", acc);
//   acc = acc - 5;
// }
// falsy: values: undefined,'',false,0
// truthy: numb!==0,true,'string'
let numb = -123;
// while (numb < 0) {
//   console.log(numb, " is less than 0");
//   numb =numb +2;
// }

// A program to print 100 random numbers


let n = 100
while (n > 0) {
    let rand = Math.random()
    console.log('Random at ', n,'', ' is => ', rand)
    n=n-1
}