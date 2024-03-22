// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    let array = obj.key.filter((item) => item.length % 2 == 1);
    return array;
}