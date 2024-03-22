function convertDoubleSpaceToSingle(str) {
    // your code here
    let stringArr = str.split("  ");
    let stringWithOneSpace = stringArr.join(" ");
    return stringWithOneSpace;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
