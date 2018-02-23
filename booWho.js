/*
  Code was simple to write but really understanding the question took some time.
  
  Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.

  I had to use the === so that no type coercion occured. Javascript coerces values to types
  So in the case of the number 1 == string 1 the number gets coerced into being a string.
*/
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);
