function smallestCommons(arr) {

	/* Need to find all the numbers in between arr[0] and arr[1].
	They also may not be in sequential order arr[0] > arr[1] is
     possible.
  */
	var nums = [];

	// Find all the numbers bewteen arr[0] and arr[1]
	if (arr[0] >= arr[1]) {
		nums.push(arr[0]);
		console.log("Adding to array: " + (nums[nums.length-1]));
		while (nums[nums.length-1] > arr[1]){
			nums.push((nums[nums.length-1]-1));
			console.log("Adding to array: " + (nums[nums.length-1]));
			// The smaller number should be the first number.
		}
	} else if (arr[0] <= arr[1]) {
			nums.push(arr[1]);

			while (nums[nums.length-1] > arr[0]){
				nums.push((nums[nums.length-1]-1));
				console.log("Adding to array: " + (nums[nums.length-1]));
			}
	}console.log("The array is " + nums);


		function lcm(numbers) {
			var a;
			var b;
			var lastTwo = [];

			// Base Case.
	    if (numbers.length == 2){
				return numbers[0] * numbers[1] / gcd(numbers[0],numbers[1]);

	    } else if (numbers.length > 2) {
					// Need to split the array up or slice it.
					lastTwo.push(numbers.pop());
					console.log("A is " + lastTwo[0]);
					lastTwo.push(numbers.pop());
					console.log("B is " + lastTwo[1]);
					return lcm( numbers.concat(lcm(lastTwo)) );
	    }
	    else return null;
		}


		function gcd(a,b) {
			console.log("Running " + a + " vs " + b );
	    if (a === b) {
	      // Return the Greatest Common Denominator.
	      return a;
				// Exits function if common denominator 1 is found.
	    } else if ( a == 1 || b == 1) {
				return 1;
			}
			else if (a > b) {
	        return gcd(a-b,b);
	    } else if (a < b) {
	        return gcd(a,b-a);
	    }
	    else return 1;
  	}

		var x = lcm(nums);
  	//var x = gcd(500,120);
  	console.log(x);
  	return x;
   	//return arr;
}

var answerBox = document.getElementById("answer");

answerBox.textContent = smallestCommons([1,13]);
