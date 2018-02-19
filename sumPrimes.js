function sumPrimes(num) {

  /* Any even number greater than 2 is not a prime
     Any odd number divisible by 3,5,7 and greater than 7 is not a prime.
  */
  var primeHigh;
  var primeLow;
  var primeNums = [];
  var notPrime = false;
  function reducer (acc, curr) {
   return acc+curr;
  }
  
  if (num > 3) {
    
    primeNums.push(2);
    primeNums.push(3);
      for (i = 4; i <= num; i++) {
        notPrime = false;     // Reset this flag here instead of at the end. Loop kept not adding 5 as a prime number since it's the first prime after 3.
        
        if (i % 2 == 0 || i % 3 == 0 ){
         // Do nothing.
        } else {
            
            for (k=1; (6*k-1) <= i; k++ ) {
              primeHigh = (6*k)-1;
              primeLow = (6*k)+1;
            
              if ( (i != primeHigh && i != primeLow) && (i % primeHigh == 0 || i % primeLow == 0)) {
                //Not a prime so set the flag to be true.
                notPrime = true;
                break;
              }

            }
              if (!notPrime) {
                // If notPrime is false, it is a prime so push it onto the array.
                primeNums.push(i);
              }
        }
      }
  }

    var total = primeNums.reduce(reducer,0);
    return total;

}
