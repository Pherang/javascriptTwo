
function sumAll(arr) {
  
  var max = arr.reduce(function(a,b) {
    return Math.max(a,b); 
  });

  var min = arr.reduce(function(a,b) {
    return Math.min(a,b); 
   });
  var total = 0;
  for (i = min; i < max+1; i++){
     total += i;
     console.log(total);
  }
  return total;
}

sumAll([1, 4]);
