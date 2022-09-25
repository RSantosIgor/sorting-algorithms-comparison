import { Result } from "../result.js"

export function quickSort(array, startIndex, endIndex, result = new Result()) {
    // verify that the start and end index have not overlapped
    if (startIndex < endIndex) {
      // calculate the pivotIndex
      let pivotIndex = partition(array, startIndex, endIndex, result)
      // sort the left sub-array
      quickSort(array, startIndex, pivotIndex, result)
      // sort the right sub-array
      quickSort(array, pivotIndex + 1, endIndex, result)
    }
  }
  
  function partition(array, startIndex, endIndex, result) {
    let pivotIndex = Math.floor((startIndex + endIndex) / 2)
    let pivotValue = array[pivotIndex]
  
    while (true) {
      // start at the FIRST index of the sub-array and increment
      // FORWARD until we find a value that is > pivotValue
      do { 
        startIndex++;
        result.incrementComparation();
      } while (array[startIndex] < pivotValue);

      // start at the LAST index of the sub-array and increment
      // BACKWARD until we find a value that is < pivotValue
      do {
        endIndex--;      
        result.incrementComparation();
    } while (array[endIndex] > pivotValue);

      result.incrementComparation()
      if (startIndex >= endIndex) return endIndex;

      // swap values at the startIndex and endIndex
      let temp = array[startIndex]
      array[startIndex] = array[endIndex]
      array[endIndex] = temp
      result.incrementSwap();
    }
  }
  
/*   let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  quickSort(array, 0, array.length - 1)
  alert(array) */