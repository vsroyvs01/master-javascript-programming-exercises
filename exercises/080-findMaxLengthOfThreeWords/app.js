// Write your function here
function findMaxLengthOfThreeWords(str, str2, str3) {
    let len = str.length
    let len2 = str2.length
    let len3 = str3.length
    let max = len;

    return Math.max(len, len2, len3);
}