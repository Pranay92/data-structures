/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
    
    var min = 0;
    var max = array.length - 1;
    var guess;
    var index = 0;
    
    while(index < array.length){

        guess = parseInt(max+min/2,10);

        if(array[min] === targetValue){
            return min;
        }

        if(array[max] === targetValue){
            return max;
        }
        
        if(array[guess] === targetValue) {
            return guess;
        }

        if(array[guess] < targetValue){
            min = guess + 1;
        }
        
        if(array[guess] > targetValue) {
            max = guess - 1 ;
        }
        
        index++;
    }


  return -1;
};

var nos = [1,12,45,68,73,112,141,159,177];

var result = doSearch(nos, 73);
console.log("Found number at index " + result);
