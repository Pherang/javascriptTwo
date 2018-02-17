
/* Remember the goal, just add the odd fibonacci numbers.

*/


function sumFibs(num) {
  /* Fibonacci is 1, 1, 2, 3, 5, 8   n=(n-1) + (n-2)
     Odd numbers divided by 2 results in a remainder.
  */
  var oddFibs;
  var result = 0;
  function reducer (acc,curr) { return acc + curr;}
  
  
  //function findFibs (num){
    
    oddFibs = [1,1];
    /* If the current fibonacci number is odd then add it.
    That means if fibnum/2 Remainder 1 then add that number
    to the sequence. */
    if (num == 1) {
      return 1;
    }
    if (num == 2) {
      return 2;
    } else {
      
      for (i = 2; i < num; i++) {
        
        if (oddFibs[i-1] % 2 > 0){
          oddFibs[i] += oddFibs[i-1];
        }
        if (oddFibs[i-2] % 2 > 0) {
          oddFibs[i] += oddFibs[i-2];
        }
      }
      result = oddFibs.reduce(reducer, 0);
      console.log("The result is " + result);
      
      
    }
    
    
    
  //}
   
  return result;
}

sumFibs(4);
