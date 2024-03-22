function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = 9.5;
    let tip = 15;
    return preTaxAndTipAmount + preTaxAndTipAmount*tax/100 + preTaxAndTipAmount*tip/100; 
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
