function addTogether() {

/* If this function receives two arguments then add them together.
If it receives one argument then return a function that expects
one argument and if received adds it to the previous.
*/
  var answer;
  if (arguments.length == 2 ){
      console.log("Made it in");
      if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) {
        console.log("Array is not a number");
        return undefined;
      } else {
        return Number.parseInt(arguments[0] + arguments[1]);
      }
    } else if (arguments.length == 1) {
      var oldnum = arguments[0];

        if (!Number.isInteger(oldnum)) {
          return undefined;
        } else
        /* return a function that expects a number.
           Using the idea of closure here. The function add() is a closure that contains

        */
        return (function add(newnum) {
          if (!Number.isInteger(newnum)){
            return undefined;
          } else
          return oldnum + newnum;
        });
      } else {

        return undefined;
      }
} // End addTogether

var answerBox = document.getElementById("answer");
x = addTogether(2, "3");

if (x === undefined) {
  x = "undefined";
}

answerBox.textContent = x;
