import { Result } from "../result.js"

export function shellSort(array, result = new Result()) {
    /*
     * for-loop setup:
     *      1. set the gapSize to the length of the array / 2
     *      2. run the loop as long as gapSize > 0
     */
    for (let gapSize = Math.floor(array.length / 2); gapSize > 0; gapSize = Math.floor(gapSize / 2)) {
      for (let currentIndex = gapSize; currentIndex < array.length; currentIndex++) {
  
        // save the currentIndex
        let currentIndexCopy = currentIndex
        // save the value of the currentIndex
        let itemValue = array[currentIndex]
        result.incrementComparation();
        while (currentIndexCopy >= gapSize && array[currentIndexCopy - gapSize] > itemValue) { //TODO: COMO DETECTAR ESSA COMPARAÇÃO?
          result.incrementComparation();
          array[currentIndexCopy] = array[currentIndexCopy - gapSize]
          result.incrementSwap();
          currentIndexCopy -= gapSize
        }
  
        array[currentIndexCopy] = itemValue
        result.incrementSwap();

      }
    }
  }
  
/*   let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  shellSort(array)
  alert(array) */