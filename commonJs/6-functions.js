function AdditionOfTwo(firstNumber, secNumber) {
  let ans = firstNumber + secNumber;
  console.log("The sum of " + firstNumber + " and " + secNumber + " is " + ans);
}

// call

function SubtractTwoNumbers(m, n) {
  console.log(m - n);
}

// AdditionOfTwo(100, 3);
// SubtractTwoNumbers(67, 23)

//Finding the factor of a number

function factorOfNumFx(number, factor) {
  if (number % factor === 0) {
    console.log(number + " is a product of " + factor);
  } else {
    console.log(number + " is not a product of " + factor);
  }
}

// factorOfNumFx(13, 5);

const oddOrEvenFx = (a) => {
  a % 2 === 0
    ? console.log(a + " is even number")
    : console.log(a + " is odd number");
};

// oddOrEvenFx(588);

function EvenOdd(anyNumber) {
  if (anyNumber % 2 === 0) {
    console.log(anyNumber, " is even");
  } else {
    console.log(anyNumber, " is odd");
  }
}

// EvenOdd(121);
// EvenOdd(34);
// EvenOdd(21);
// EvenOdd(7);
// EvenOdd(23);
// EvenOdd(412);

function factorial(number) {
  let fact = 1;
  for (let x = number; x > 1; x--) {
    fact = fact * x;
  }
  console.log(fact);
}
// factorial(2);

function Repeater(anyText, counter) {
  for (let x = 1; x <= counter; x++) {
    console.log(anyText);
  }
}

Repeater(4*5, 6);
