function x(boxWeight) {
  //sort
  boxWeight.sort((a, b) => a - b);

  let elevator = 0;
  let i = 0;
  let j = boxWeight.length - 1;

  while (i <= j) {
    if (boxWeight[i] + boxWeight[j] <= 150) {
      i++;
    }
    j--;
    elevator++;
  }
  return elevator;
}
let boxWeights = [50, 100, 50, 100, 50];
// console.log(x(boxWeights));

//prime or not
const prime = (num) => {
  if (num == 0 || num == 1) return false;
  if (num == 2 || num == 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// function nextLuckyTicket(digit, age, lastTicket) {
//   digit = digit.toString(); // Convert digit to string for easy comparison
//   let currentTicket = lastTicket + 1; // Start checking from the next number
//   // let temp = 440 + 1;
//   console.log(currentTicket.toString().split(3));
//   while (true) {
//     if (currentTicket.toString().split(digit).length - 1 === age) {
//       return currentTicket;
//     }
//     currentTicket += 1;
//   }
// }

// Example usage:
// const digit = 3;
// const age = 2;
// const lastTicket = 3332;

// console.log(nextLuckyTicket(digit, age, lastTicket)); // Output: 133

/* 
function findNextTicket(digit, age, lastTicket) {
  // Check for valid inputs
  if (digit < 0 || digit > 9 || age <= 0 || lastTicket <= 0) {
    return "Invalid input";
  }

  // Increment the last ticket number
  let nextTicket = lastTicket + 1;

  // Convert the number to a string for easier manipulation
  let nextTicketString = nextTicket.toString();

  // Loop until we find a ticket with the required number of digits
  while (countOccurrences(nextTicketString, digit) !== age) {
    nextTicket++;
    nextTicketString = nextTicket.toString();
  }

  return nextTicket;
}

// Helper function to count occurrences of a digit in a string

function countOccurrences(str, digit) {
  let count = 0;
  // Iterate through substrings of length 'age' (exclusive of the last character)
  for (let i = 0; i <= str.length - age; i++) {
    const subString = str.substring(i, i + age);
    if (subString === digit.toString().repeat(age)) {
      count++;
    }
  }
  return count;
}

// Example usage
const luckyDigit = 3;
const age = 2;
const lastTicket = 3332;

const nextTicketNumber = findNextTicket(luckyDigit, age, lastTicket);

console.log("Next ticket Arnav should buy:", nextTicketNumber); // Output: 133
 */

/* function tryy() {
  let attempt = Math.random();
  console.log("Trying with:", attempt);
  return attempt > 0.5;
}

let succeed;
while (!(succeed = tryy()));

console.log("Succeeded with:", succeed);
 */
