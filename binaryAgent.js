
function binaryAgent(str) {
  /* Need to convert the binary argument into an English string */
  /* Need a way to convert the binary into a decimal number.
     This number then needs to be read as an ASCII char code.
   */
  /* I could create an array that had all the decimal values for each binary position */
  var binaryMap = [128,64,32,16,8,4,2,1];
  // Split string of binary numbers into an array.
  var bins = str.split(" ");
  var words = [];

  // Create a function to check each binary number and convert to character.
  // If a digit in binary is a 1 it should map to the corresponding decimal number
  // 1000000 = 128
  function findCode(element) {


  }
  function findChar(element){
    var converted = [];
    converted = element.split("");
    var charCode = converted.reduce(function(a,b,index) {
       if (b == 1) {
         //console.log("The answer is " acc + Number.parseInt(binaryMap[index]));
         var z = Number.parseInt(binaryMap[index],10);
         console.log("Z is " + z);
         console.log(a + z);
         return (a + z);

       }

    });
    console.log("Character code is " + charCode);

  }

  // Full string of binary numbers has been split into elements in an array.
  bins.forEach(findChar);


  return bins;
}



var answerBox = document.getElementById("answer");

answerBox.textContent = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
/* should return "Aren't bonfires fun!?" */
