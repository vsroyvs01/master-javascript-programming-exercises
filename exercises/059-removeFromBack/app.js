function removeFromBack(arr) {
    // your code here
    let newArr = arr;
    newArr.pop();
    return newArr;
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
