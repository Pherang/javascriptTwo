function steamrollArray(arr) {
  	var theResult = [];
	function traverse(element){
		
		// If element isn't an array then add it to the flattened array/
		if (!Array.isArray(element)) {
			theResult.push(element);
		} else {
			// If the element is an array, then we check each if IT'S elements with traverse().
			element.forEach(traverse);
		}

	}

	arr.forEach(traverse);

	return theResult;
}
