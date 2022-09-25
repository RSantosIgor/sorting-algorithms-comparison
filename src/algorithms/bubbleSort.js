import { Result } from "../result.js"

export function bubbleSort(array, result = new Result()) {
    let n = array.length
    while (n > 0) {
      let lastModifiedIndex = 0
      for (let currentIndex = 1; currentIndex < n; currentIndex++) {
        // if the item at the previous index is greater than the item at the `currentIndex`, swap them
        result.incrementComparation();
        if (array[currentIndex - 1] > array[currentIndex]) {
          
          // swap
          let temp = array[currentIndex - 1]
          array[currentIndex - 1] = array[currentIndex]
          array[currentIndex] = temp
          result.incrementSwap();
          // save the index that was modified
          lastModifiedIndex = currentIndex
        }
      }
      // save the last modified index so we know not to iterate past it since all proceeding values are sorted
      n = lastModifiedIndex
    }
  }
  
 /* let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  bubbleSort(array)
  alert(array) */