/*

Look thru array collection, looking for the key value pair in 'source'
If the pair is found in an object, push that object onto an array.

*/
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceArr = [];
  
  // Create an array with the key value pairs from source.
  sourceArr = Object.keys(source);
  var collArr = [];
  // Go through the array of objects given by collection to find
  // if the key value pairs from source are in each object.
  // if an object that is found that contains all the key value pairs
  // in source then add that object to an array. arr in this case.
  for (i=0; i < collection.length; i++){
    
    collArr = Object.keys(collection[i]);
    
     
    for (j = 0; j < source.length; j++){
     
      
      if (collection[i].hasOwnProperty('last')) {
        
        
    }  
      
    }
    
    
    
    
  }
  
  
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
