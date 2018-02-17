
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var woot = str;
  function processStr(match,p1,p2,offset,fullstring){
  console.log("This was called");
    console.log(offset);
    console.log("Hello");
    return "Z";
    
  
  }  
    
  var spinal = woot.replace(/([A-Z])([ _])/g, processStr);
  console.log("Spinal is " + spinal);
  
  return spinal;
}

spinalCase('AllThis Is Spinal Tap');
