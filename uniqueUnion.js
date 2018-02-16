
function uniteUnique(arr) {
  /* It sounds like we need to go through the first array of numbers
     and keep those in the final array. Any duplicates of those same numbers
     in subsequent arrays will NOT be kept in the final array.

     Reduce works through elements of an array. Those elements themselves could be elements of a multidirectional array.

  */
  function uniques(numbers, currentVal){

    var numIsIn;
    console.log("Working on " + currentVal);
    for (i=0; i < currentVal.length; i++) {
      numIsIn = false;

      for (j = 0; j <= numbers.length; j++) {

        if (numbers[j] == currentVal[i]){
          numIsIn = true;

          break;
        }

      }
      if (numIsIn == false)
      {
        numbers.push(currentVal[i]);
      }
    }

    return numbers;
  }
  var numGroups = [];
  for (i=0; i < arguments.length; i ++) {
    numGroups.push(arguments[i]);
  }

  var uniqueNumbers = numGroups.reduce(uniques,[]);
  console.log(uniqueNumbers);
  return uniqueNumbers;
}


var jo = document.getElementById("answer");

jo.textContent = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
