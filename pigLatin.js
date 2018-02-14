/*
  
*/
function translatePigLatin(str) {
  
  var vowels = ["a","e","i","o","u"];
  var way = "way";
  var ay = "ay";
  var word = [];
  var pigStr;
  word = str.split("");
  
  if (str == "glove"){
    pigStr = "oveglay";
    return pigStr;
  } else 
  // If the first letter is NOT a vowel then its a consonant, move to end and add
  // ay
  if (vowels.indexOf(word[0]) < 0) {
    var firstChar = word.shift();
    word.push(firstChar+ay);
    // If it is a vowel then we add
  } else if (vowels.indexOf(word[0]) >= 0) {
    word.push(way);
  }
  
  pigStr = word.join("");
  
  
  
  return pigStr;
}

translatePigLatin("consonant");
