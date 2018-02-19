
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

  /* Pseudo code for a recursive LCM function.
  lcm (arguments) {

   if (arguments == 2) {
     a = arguments[0]
     b = arguments[1]
     a * b / gcd(a,b)
   return the result;
else {

           get the last two arguments and lcm them
           and also send the rest of the arguments to the next function call.
           lcm(arguments minus the last two, lcm(arguments(last), arugments(secondlast))

       }

 } */

function gcd(a,b) {

    var temp;

    console.log(a + " vs " + b);

    if (a === b) {

      console.log("returned " + parseInt(a));

      return a;

    } else if (a > b) {

        return gcd(a-b,b);

    } else if (a < b) {

        return gcd(a,b-a);

    }

    else return null;

  }



  var x = 0;

  x = gcd(396,120);

  console.log(x);

  return x;



   return arr;
}




var answerBox = document.getElementById("answer");

answerBox.textContent = smallestCommons([1,5]);
