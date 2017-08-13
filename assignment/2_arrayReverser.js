function arrayReverser(arr) {
  // Copy items from the array called arr to a new array called reversedArray, reversing the order of elements
  // The last element on arr should become the first in reversedArray
  // Do not use Array.reverse()!

  // Write the code here
  var reversedArray = [];
for (var i = arr.length - 1; i > -1; i--) {
  reversedArray.push(arr[i]);
}

  // return our reversed array
  return reversedArray;
}

// call arrayReverser and console log the return
console.log(arrayReverser([1, 2, 3, 4, 5, 6, 7]));
