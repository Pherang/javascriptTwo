function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  function createSpinal(match,p1,p2,p3,p4,offset,fullStr) {
    
    console.log("Found " + match);
    console.log("p1 is " + p1);
    console.log("p2 is " + p2);
    
    if (p1 && p2) {
      return p1 + "-" + p2.toLowerCase();
    }
    if (p3) {
      return "-";
    }
    if (p4) {
      return p4.toLowerCase();
    }
  }
  
  var newStr = str.replace(/([a-z])([A-Z])|([ _])|([A-Z])/g, createSpinal);
  
  
  return newStr;
}

spinalCase('This Is SpinalTap');
