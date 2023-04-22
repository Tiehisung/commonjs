//Function to determine if a number is a product of seven

function ProductOfSeven(number) {
  if (number % 7 === 0) {
    console.log(number, " is a product of seven");
  } else {
    console.log(number + " is not a product of 7");
  }
}

// ProductOfSeven(777771);

// Check if a number is a factor of another

function factorOfAnother(number, factor) {
  if (number % factor === 0) {
    console.log(number, " is a product of ", factor);
  } else {
    console.log(number + " is not a product of " + factor);
  }
}

// factorOfAnother(21,3)

// Factors of 720

function factors720() {
  for (let x = 1; x <= 720; x++) {
    if (720 % x === 0) {
      console.log(x, " is a factor");
    }
  }
}

// factors720();

function factorFinder(number) {
  for (let x = 1; x <= number; x++) {
    if (number % x === 0) {
      console.log(x);
    }
  }
}

// factorFinder(1024);
