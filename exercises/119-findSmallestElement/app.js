function findSmallestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    }
    let min = arr[0];
    arr.forEach(element => {
       if (element < min) {
            min = element
       } 
    });
    return min;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1