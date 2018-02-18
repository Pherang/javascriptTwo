
function sumPrimes(num) {

  /* Any even number greater than 2 is not a prime
     Any odd number divisible by 3,5,7 and greater than 7 is not a prime.
  */

  var primeNums = [];

  function reducer (acc, curr) {
   return acc+curr;
  }

  for (i=2; i < num; i++ ) {

      //Conditions to not push



      // Otherwise it's probably prime.
      primeNums.push(i);



  }
  var total = primeNums.reduce(reducer,0);


  return total;
}

var result = document.getElementById("answer");

result.textContent = sumPrimes(977);
