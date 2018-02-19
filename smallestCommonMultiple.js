
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
		// Lowest Common Multiple takes an array of numbers
		// Checks to make sure there are only two numbers
		//
		function lcm(numbers) {
					var a;
					var b;
					var remainNumbers;
					// Base Case.

			    if (numbers.length == 2{

						return numbers[0] * numbers[1] / gcd(numbers[0],numbers[1]);

			    } else if (numbers.length > 2) {
							// Need to split the array up or slice it.
							a = numbers[numbers.length-1];
							b = numbers[numbers.length-2];
							return lcm(reducedarray, lcm(a,b));
			    }

			    else return null;

			  }


				function gcd(a,b) {

    console.log(a + " vs " + b);
    if (a === b) {
      //Return the Greatest Common Denominator.
      return a;
    } else if (a > b) {
        return gcd(a-b,b);
    } else if (a < b) {
        return gcd(a,b-a);
    }
    else return null;
  }


  	var x = gcd(500,120);
  	console.log(x);
  	return x;
   	return arr;
}




var answerBox = document.getElementById("answer");

answerBox.textContent = smallestCommons([1,5]);
