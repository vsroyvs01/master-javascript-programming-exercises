function addToFrontOfNew(arr, element) {
    // your code here
    let oldArray = [];
    arr.forEach(element => {
        oldArray.push(element)
    });
    oldArray.unshift(element)
    let newArray = oldArray
    return oldArray;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
