
/* Remember the goal, just add the odd fibonacci numbers.

*/

function sumFibs(num) {
  /* Fibonacci is 1, 1, 2, 3, 5, 8   n=(n-1) + (n-2)
     Odd numbers divided by 2 results in a remainder.
  */
  var oddFibs;
  var result = 0;
  function reducer (acc,curr) {

    return (curr % 2 != 0 ? acc + curr : 0);

  }


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
        oddFibs[i] = oddFibs[i-1] +oddFibs[i-2];
      }

      }
      console.log("The array is " + oddFibs);
      result = oddFibs.reduce(reducer, 0);
      console.log("The result is " + result);






  //}

  return result;
}



var jo = document.getElementById("answer");

jo.textContent = sumFibs(10);
