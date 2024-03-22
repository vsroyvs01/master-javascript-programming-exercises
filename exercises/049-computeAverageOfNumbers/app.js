// Write your function here
function computeAverageOfNumbers(arr) {
    let sum = 0;
    
    if (arr.length == 0) {
        return 0;
    } else {
        for (let index = 0; index < arr.length; index++) {
            sum += arr[index]
        }
        return sum/arr.length;
    }
}