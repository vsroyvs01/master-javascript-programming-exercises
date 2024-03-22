function or(expression1, expression2) {
  // your code here
  if (expression1 == expression2) {
    return expression1 && expression2
  } else {
    return !(expression1 && expression2)
  }
}

let output = or(true, false);
console.log(output); // --> true;
