function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length == 0){
        return 0;
    }
    let max = arr[0].length;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > max) {
            max = arr[index].length;
        }
    }
    return max;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
