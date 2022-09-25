import { Result } from "../result.js"

/* let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
mergeSort(array, 0, array.length - 1)
alert(array) */

// main function that sorts array[start..end] using merge()
export function mergeSort(array, start, end, result = new Result()) {
  // base case
  if (start < end) {
    // find the middle point
    let middle = Math.floor((start + end) / 2)

    mergeSort(array, start, middle, result) // sort first half
    mergeSort(array, middle + 1, end, result)  // sort second half

    // merge the sorted halves
    merge(array, start, middle, end, result)
  }
}

// merges two subarrays of array[]
function merge(array, start, middle, end, result = new Result()) {
  // create temp arrays
  let leftArrayLength = middle - start + 1
  let rightArrayLength = end - middle

  let leftArray = []
  let rightArray = []

  // fill in left array
  for (let i = 0; i < leftArrayLength; ++i)
    leftArray[i] = array[start + i]

  // fill in right array
  for (let i = 0; i < rightArrayLength; ++i)
    rightArray[i] = array[middle + 1 + i]

  // merge the temp arrays

  // initial indexes of first and second subarrays
  let leftIndex = 0, rightIndex = 0

  // the index we will start at when adding the subarrays back into the main array
  let currentIndex = start;

  // compare each index of the subarrays adding the lowest value to the currentIndex
  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    result.incrementComparation();
    if (leftArray[leftIndex] <= rightArray[rightIndex]){
      result.incrementSwap();
      array[currentIndex] = leftArray[leftIndex++]
    }
    else { 
      result.incrementSwap();
      array[currentIndex] = rightArray[rightIndex++]
    }
    currentIndex++
  }

  // copy remaining elements of leftArray[] if any
  while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]

  // copy remaining elements of rightArray[] if any
  while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
}