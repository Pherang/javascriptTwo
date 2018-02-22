function addTogether() {

  // If this function receives two arguments then add them together.
  //
  var answer;
  if (arguments.length == 2 ){
    console.log("Made it in");
    if (!Number.isInteger(arguments[0])) {

      console.log(arguments[0] + " is not a number");
      return undefined;

    } else if (!Number.isInteger(arguments[1])){

      console.log(arguments[1] + " is not a number");
      return undefined;

    }

  }


  return undefined;
}

var answerBox = document.getElementById("answer");

answerBox.textContent = addTogether(2,[3]);
