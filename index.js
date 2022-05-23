function add(a, b) {
return a + b     
};

function subtract(a, b) {
return a - b
};
function multiply(a, b) {
return a * b
};

function divide(a, b) {
return a / b
};

let number = 5;

function add5() {
    return (number += 5);
  }
  
  function divideBy3() {
    return (number /= 3);
  }
  
  divideBy3(); //=> 3.3333333333333335
  
  add5(); //=> 8.333333333333334
  
  // reset number
 number = 10;
  
  add5(); //=> 15
  
  divideBy3(); //=> 5


  parseInt("2", 10);

  parseInt("2.2222", 10);

  parseInt("nonsense!", 10);

  parseFloat("80.123999");

let n = 100;

function increment(n) {

  n++;
  return n;
}
  function decrement(n) {
      n--
      return n;
  };


  function makeInt(n){
  return parseInt(n, 10) 
  }


    function preserveDecimal(n){
    return parseFloat(n)
    }
  
 