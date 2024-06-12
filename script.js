/* 
// const a = 20;
// let c = 10;
b = 10;
console.log(b);
var b = 100;
// var b = 1000;
// console.log(a);
console.log(b);
// console.log(c);
if (true) console.log("object"); */
/* let a = 0;
function name() {
  var a = 10;
  a = 1000;
  const b = 100;
  var c = 1000;
  console.log(a);
  console.log(b);
  console.log(c);
}

name()
console.log(a);
 */
const n = 100;
{
  const n = 10;
  {
    const n = 1;
    // console.log(n);
  }
}

function show(marks) {
  //   let message = marks || "absent";
  let message = marks ?? "absent";
  //   let message = marks == null ? "absent" : marks;
  console.log(`Marks ${message}`);
}

// show(29);
// show(0);
// show(46);

function x() {
  var a = 10;
  let g = 22;
  function y() {
    console.log(a);
    console.log(g);
  }
  return y;
}

// let z = x();
// console.log(z);

// z(); //y remember its lexical environment

/* 
for (let i = 1; i <= 5; i = i * 2) {
  console.log(i);
  console.log("object");
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
 */
/* 
function addEventLIstner() {
  let count = 0;

  document.getElementById("click").addEventListener("click", () => {
    console.log("button clicked ", ++count);
  });
}
addEventLIstner(); */

/* let prom = new Promise((resolve, reject) => {
  let condition = false;
  document.getElementById("click").addEventListener("click", () => {
    condition = true;
    if (condition) {
      resolve("Data");
    } else reject("error");
  });
});

prom
  .then((x) => {
    console.log(x, "run");
  })
  .catch(() => {
    console.log("error");
  }); */

let prom = new Promise((resolve, reject) => {
  let condition = false;
  document.getElementById("click").addEventListener("click", () => {
    condition = true;
    if (condition) {
      return resolve("Data");
    } else {
      reject("error");
    }
  });
});

prom
  .then((x) => {
    console.log(x, "run");
  })
  .catch(() => {
    console.log("error");
  });

let myPromise = new Promise((resolve, reject) => {
  // Get the button element
  let button = document.getElementById("button");

  // Add a click event listener to the button
  button.addEventListener("click", () => {
    // Resolve the promise when the button is clicked
    resolve("Promise is resolved");
  });
});

// Use the promise
myPromise
  .then((message) => {
    console.log(message); // This will print "Promise is resolved" when the button is clicked
  })
  .catch((error) => {
    console.error(error);
  });

//!  horizontal callback , callback hell
// createOrder(cart, (orderID) => {
//   proceedTOPayment(orderID, (paymentGatewayId) => {
//     proceedToDelviery(paymentGatewayId, (confirmationId) => {
//       Address(confirmationId, () => {
//         updateWalletBalance();
//       });
//     });
//   });
// });

//* using promises to resolve callback hell , promise chaining(always return in promise, so that it could pass down the chain )
//*
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((PaymentRequest) => proceedToDelivery(PaymentRequest))
  .then((d) => address(d))
  .then((dfdf) => walletUpdate(dfdf));

// Handling the resolved promise

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (PaymentRequest) {
    return proceedToDelivery(PaymentRequest);
  })
  .then(function (balance) {
    window.alert(balance);
    return UpdateWallet(balance);
  })
  .catch(function (error) {
    console.error(error.message);
  })
  .then(function () {
    console.log("no matter what happens i will be called");
  });

// * Debouncing ;
let counter = 0;

const getData = () => {
  console.log("fn called times :" + counter++);
};
