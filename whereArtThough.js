function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  /* Need to compare the source against each object in array collection.
     Collection is an array so we can refer to each object by an index.
     Source is an object with key value pairs.
     What we're really doing is comparing objects.
     */
  var sourceKeys = Object.keys(source);
  var keyNot = false;
  console.log("Source keys are " + JSON.stringify(sourceKeys));
  for (i=0; i < collection.length; i++) {
  keyNot = false;
    /* Inside the loop we examine object at collection[i] and try to find if all the key value pairs
       from source are contained in collection[i].
       So we need a way to get the key value pair from source and compare to or find the key value pairs in collection[i].
    */

    for (j=0; j < sourceKeys.length; j++) {

      /* Let's see if this object even has the key.
         if it does then we can check it's value by using the key to find it's value in the original source object we can also use that to find it in the original collection[i] object.
         If it doesn't contain the value then we ignore it.
         */

       if (!collection[i].hasOwnProperty(sourceKeys[j])) {
         console.log(sourceKeys[j] + " Not in here " + JSON.stringify(collection[i]));
         // If the key isn't in the object exit this inner loop. The object's disqualified.
         keyNot = true;
         break;
       } else {
         // If it has the source key let's check the value. If it doesn't get out of this loop.

         if (collection[i][sourceKeys[j]] != source[sourceKeys[j]]) {
           keyNot = true;
           console.log("Testing! " + JSON.stringify(collection[i][sourceKeys[j]]) + " doesn't equal " + source[sourceKeys[j]]);
           break;
         }

       }

    } // if it passes our error checking system it must be the same we'll add it to the array.
    if (keyNot == false) {
      arr.push(collection[i]);
      console.log("This object passed: " + JSON.stringify(collection[i]));
    }


  }






  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
