// Write your function here
function findMinLengthOfThreeWords(str, str2, str3) {
    let len = str.length
    let len2 = str2.length
    let len3 = str3.length
    let min = len;

    if (len2 < len ) {
        min = len2;
    }
    if (len3 < len) {
        min = len3;
    }
    return min;
}