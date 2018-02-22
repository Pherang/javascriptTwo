function flatten(arr) {

	var theResult = [];
	function traverse(element){

		if (!Array.isArray(element)) {
			console.log("The element is " + element);

			theResult.push(element);
			console.log("The result is " + theResult);
		} else {
			console.log("The element is not an array " + element);
			element.forEach(traverse);
		}

	}

	arr.forEach(traverse);

	return theResult;
}
