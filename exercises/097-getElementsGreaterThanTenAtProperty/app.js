// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    let array = obj.key.filter((item) => item > 10);
    return array;
}