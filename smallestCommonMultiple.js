
function smallestCommons(arr) {
  
  /* Need to find smallest common multiple between two numbers AND
  all the numbers in between
  */
    
  /* Need to find all the numbers in between arr[0] and arr[1].
     They also may not be in sequential order arr[0] > arr[1] is 
     possible. 
  */
  
  /* Reading up on math, could use  the lcm (a,b) = a * b / gcd ( a,b) formula find it.
    Will also need the gcd formula which is gcd(a,b) = gcd(a-b,b)
  */
  
  /* The lcm formula can be used recursively to find the lcm of multiple numbers.
      lcm (a,b,c) = lcm (a, lcm (b,c)) */
  
  
  
  
   return arr;
}


smallestCommons([1,5]);
