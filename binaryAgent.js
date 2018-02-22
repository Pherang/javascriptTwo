
function binaryAgent(str) {
  /* Need to convert the binary argument into an English string */
  /* Need a way to convert the binary into a decimal number.
     This number then needs to be read as an ASCII char code.
   */
  /* I could create an array that had all the decimal values for each binary position */
  var binaryMap = [128,64,32,16,8,4,2,1];
  var bins = str.split(" ");
  var words = [];

  // Create a function to check each binary number and convert to character.
  function findChar(element){
    var converted = [];
    converted = element.split("");

    converted

  }

  bins.forEach(findChar(element));


  return str;
}



var answerBox = document.getElementById("answer");

answerBox.textContent = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
/* should return "Aren't bonfires fun!?" */
