import { Result } from "../result.js"

export function heapSort(array, result = new Result()) {
    let size = array.length

    // build heapSort (rearrange array)
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
      heapify(array, size, i)
  
    // one by one extract an element from heapSort
    for (let i = size - 1; i >= 0; i--) {
      // move current root to end
      let temp = array[0]
      array[0] = array[i]
      array[i] = temp
      result.incrementSwap();
      // call max heapify on the reduced heapSort
      heapify(array, i, 0, result)
    }
  }
  
  // to heapify a subtree rooted with node i which is an index in array[]
  function heapify(array, size, i, result = new Result()) {
    let max = i // initialize max as root
    let left = 2 * i + 1
    let right = 2 * i + 2
  
    // if left child is larger than root
    result.incrementComparation();
    if (left < size && array[left] > array[max])
      max = left
  
    // if right child is larger than max
    result.incrementComparation();
    if (right < size && array[right] > array[max])
      max = right
  
    // if max is not root
    if (max != i) {
      // swap
      let temp = array[i]
      array[i] = array[max]
      array[max] = temp
      result.incrementSwap();
  
      // recursively heapify the affected sub-tree
      heapify(array, size, max, result)
    }
  }
  
 /*  let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  heapSort(array)
  alert(array) */