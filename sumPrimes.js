function sumPrimes(num) {

  /* Any even number greater than 2 is not a prime
     Any odd number divisible by 3,5,7 and greater than 7 is not a prime.
  */
  var primeHigh;
  var primeLow;
  var primeNums = [];
  var notPrime = true;
  function reducer (acc, curr) {
   return acc+curr;
  }
    
  if (num > 3) {
    primeNums.push(2);
    primeNums.push(3);
      for (i = 4; i <= num; i++) {
        
        console.log("Testing " + i);
        if (i % 2 == 0 || i % 3 == 0 ){
          console.log("Divisible by two or three");
          
        } else {
            console.log("Made it to check primes");
            for (k=1; (6*k-1) <= i; k++ ) {
              primeHigh = (6*k)-1;
              primeLow = (6*k)+1;
              console.log("Testing " + i + " against " + primeHigh + " " + primeLow);
            
             
              if ( (i != primeHigh && i != primeLow) && (i % primeHigh == 0 || i % primeLow == 0)) {
                console.log("Not a prime " + i + " mod " + primeHigh + " is " + (i % primeHigh));
                console.log("Not a prime " + i + " mod " + primeLow + " is " + (i % primeLow));
                notPrime = true;
                break;
              } 
            
            }
              if (!notPrime) {
                console.log("Pushing onto array " + i);
                primeNums.push(i);
              }
                notPrime = false;           
            
        }
      }
  }
 
    console.log(primeNums);
    var total = primeNums.reduce(reducer,0);
    console.log("The total for " + num + " is " + total);
    return total;
  
}

sumPrimes(977);
