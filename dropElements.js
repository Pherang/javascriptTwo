function dropElements(arr, func) {
  // Drop them elements.
  
  // Drop until func returns true, once it's true stop dropping elements.
  // Once func returns true the first elemnt that is true it should not apply against the rest of the array.
  // It sounds like I need to apply the func() against a single element at a time and stop applying it once it finds the first
  // element that satisfies it.
    
  while(!func.apply(null,arr)){
    arr.shift();
  }
  
  console.log(arr);
    
  return arr;
}

dropElements([3,9,2], function(n) {return n > 2; });
