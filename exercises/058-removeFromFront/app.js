function removeFromFront(arr) {
    // your code here
    let newArr = arr;
    newArr.shift();
    return newArr;
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]