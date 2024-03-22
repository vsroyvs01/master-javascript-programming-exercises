function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    }
    let min = arr[0].length;
    arr.forEach(element => {
       if (element.length < min) {
            min = element.length
       } 
    });
    return min;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
