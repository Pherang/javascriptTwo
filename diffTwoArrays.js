/*
 Same, same; but different.
   
   It looks like two comparisons are needed.
   If an element in one array is not found in the other then it IS an element to keep.
   The unique elements should be added to a new array.
   
   The end result is an array of elements unique to arr1 or arr2.
   
   I wonder if I could simplify this code more.
   
   
*/
function diffArray(arr1, arr2) {
  var newArr = [];
 
  for (i = 0; i < arr1.length; i++) {
    
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }  
  
  for (i = 0; i < arr2.length; i++) {
    
    if (arr1.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
    }
  }   
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
