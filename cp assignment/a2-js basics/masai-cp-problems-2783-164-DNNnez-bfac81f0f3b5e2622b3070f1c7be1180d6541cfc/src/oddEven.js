function generateNumber() {
  // generate a random integer(hint : Math.random)
 let num = Math.floor(Math.random() * 101);
 document.getElementById("number").textContent = num;
 checkOddEven(num);
}

function checkOddEven(num) {
  // logic for even / odd
  let a = "The number is even"
  let b = "The number is odd"
  if(num%2==0)
  {
    document.getElementById("odd-even").textContent = a;
  }
  else{
    document.getElementById("odd-even").textContent = b;
  }
  
}

window.onload = function () {
  // add event listeners to the button here
  let tap = document.getElementById("generate-number");
  tap.addEventListener("click", onload)
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
