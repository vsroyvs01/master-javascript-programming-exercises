function search(array, value) {
  // your code here
  let left = 0;
  let rigth = array.length - 1;

  while (left <= rigth) {
    let mid = Math.floor((left+rigth)/2)
    if (array[mid] == value) {
      return mid;
    }
    else if (array[mid] > value) {
      rigth = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
