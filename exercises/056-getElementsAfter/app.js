function getElementsAfter(array, n) {
  // your code here
  // let a = [];
  // a.slice(n+1,array.length -1)
  return array.slice(n +1 ,array.length)
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
