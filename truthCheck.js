
function truthCheck(collection, pre) {
  // Is everyone being true?

  /* It sounds like we need to traverse each element of the array. Each element is an object.
     We need to traverse the object and find if it contains the key and if that key is truthy.
     Javascript has Array methods that can check elements of the array including some()
  */


  /*


  */

  return collection.every(isTruthy);



}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


var answerBox = document.getElementById("answer");

answerBox.textContent = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
