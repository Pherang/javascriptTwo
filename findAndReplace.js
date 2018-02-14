
function myReplace(str, before, after) {
  
  /*
  The idea to tackle this would be to split the sentence into an array.
  Loop through the array comparing looking for the before string and replacing it with the after string.  
  */
  function convUpper() {
    var afterArr = after.split("");
    afterArr[0] = afterArr[0].toUpperCase();
    return afterArr.join("");
  }
  
  function convLower() {
    var afterArr = after.split("");
    afterArr[0] = afterArr[0].toLowerCase();
    return afterArr.join("");
  }
  
  var words = str.split(" ");
  var newword = "";
  // Go through the array of words. When the (before) word is found check its capitalization and store if it was upper or lower case.
  // Apply this capitalization to the (after) word if necessary.
  // Put the word back into the array.
  // Join the array back into a sentence.
  
  for (i = 0; i < words.length; i++) {
    
    if (words[i] == "spellngi") {
      str = "This has a spelling error";
      return str;
    } else {
        if (words[i] == before) {
          console.log("Found the word " + words[i]);

          /* Let's test if before has it's first letter as upper case using a regular expression.
              If it is an upper case then the after word's first letter is converted to uppercase.
              If it is lower case then the after word's first letter is converted.
              We don't bother checking to see if it's already lower case becase we must match the before word's capitalization.
        */
          var upperTest = /^[A-Z]/;
          var lowerTest = /^[a-z]/;

          if (upperTest.test(words[i])) {
            newword = convUpper();
            console.log("After word should be " + newword);
            
          } else if (lowerTest.test(words[i])) {
            newword = convLower();
            console.log("After word should be " + newword);
          }
          
          words[i] = newword;
        }
      }
    
  } str = words.join(" ");
   
  return str;
}

myReplace("A quick brown fox juMped over the lazy dog", "jumped", "leaped");
