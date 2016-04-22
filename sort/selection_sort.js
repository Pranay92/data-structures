var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

  var minValue = array[startIndex];
  var minIndex = startIndex;

  for(var i = minIndex + 1; i < array.length; i++) {
      if(array[i] < minValue) {
          minIndex = i;
          minValue = array[i];
      }
  }

  return minIndex;
}; 

var selectionSort = function(array) {
    
  var len = array.length,
      minIndex = 0,
      index = 0;
  
  for(index = 0; index < len; index++) {
    minIndex = indexOfMinimum(array,index);
    swap(array,minIndex,index);
  }

};

var array = [22, 11, 99, 88, 9, 7, 42];
console.log("Array before sorting:  " + array);
selectionSort(array);
console.log("Array after sorting:  " + array);

