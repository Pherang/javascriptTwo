function steamrollArray(arr) {
  	var theResult = [];
	function traverse(element){
		
		// If element isn't an array then add it to the flattened array/
		if (!Array.isArray(element)) {
			console.log("The element is " + element);

			theResult.push(element);
			console.log("The result is " + theResult);
		} else {
			// If the element is an array, then we check each if IT'S elements with traverse().
			console.log("The element is actually an array " + element);
			element.forEach(traverse);
		}

	}

	arr.forEach(traverse);

	return theResult;
}
