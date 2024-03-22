function getAllElementsButNth(array, n) {
    // your code here
    const newArr = array.slice();
    newArr.splice(n, 1); 
    return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']