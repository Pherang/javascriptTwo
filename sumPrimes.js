
function sumPrimes(num) {

  /* Any even number greater than 2 is not a prime
     Any odd number divisible by 3,5,7 and greater than 7 is not a prime.
  */

  var primeNums = [];

  function reducer (acc, curr) {
   return acc+curr;
  }

  for (i=2; i < num; i++ ) {for (i=4; i < num; i++ ) {
    
    // All prime numbers can be found by testing 6*k +
    // Test i to see if it is divisible by any a = 6k + 1 <= sqrt()
    // 6K +- 1 <= squareroot of Math.round(Math.sqrt(i))
    
    
      for (j=1; 6*j + 1 <= Math.round(Math.sqrt(i)); j++) {
    
      console.log("Testing prime " + 6*j-1);
      console.log("Testing prime " + 6*j+1);
      // Otherwise it's probably prime.
    }
      primeNums.push(i);



      // Otherwise it's probably prime.
      primeNums.push(i);



  }
  var total = primeNums.reduce(reducer,0);


  return total;
}

var result = document.getElementById("answer");

result.textContent = sumPrimes(977);
