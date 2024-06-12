// * Debouncing ;

let count = 0;

const getData = () => {
  console.log("function called " + count++ + " times");
};
// this is calling on every keystroke ;

//delay is the delay between two keystroke
/*
 const doSomeMagic = function (func, delay) {
  return function () {
    clearTimeout(timer);
    let timer = setTimeout(() => {
      func();  // we should not call it like this , we have to fix "this" context of it
    }, delay);
  };
};
 */

// `func.apply(context, args) allows the debounced function to be called with a specific this value and arguments.

const doSomeMagic = function (func, delay) {
  let debounceTimer;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func.apply(context, args); // using apply as we can use "this" here it would confirm we are using right func
    }, delay);
  };
};

const betterfn = doSomeMagic(getData, 300); // so we are making btter fn to help us

// Debounce function

/* function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

// Function to be called on keyup
function getData() {
  const input = document.getElementById("searchInput").value;
  console.log("Fetching data for:", input);
}

// Attach the debounced function to the input's keyup event
const betterfn = debounce(getData, 300);
*/
// document
//   .getElementById("searchInput")
//   .addEventListener("keyup", debounce(getData, 300));

function throttling(func, delay) {
  let throttlingTimer;
  let flag = false;
  if (!throttlingTimer) {
    flag = true;
  }

  return function () {
    const context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      throttlingTimer = setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const thor = throttling(getData, 2000);

// * this keyword ;

//todo: how this behaves in different circumstances :

//?   this inside the global scope

console.log(this);

//?   this inside a function

//?   this in a strict mode - ( this substitution )

//?   this value depend
//  how this is called (window)

//?   this inside a object's method

//?   call apply bind methods (sharing methods)

//?   this inside Arrow funciton

//?   this inside nested arrow function

//?   this inside Dom
