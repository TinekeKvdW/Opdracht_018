const vatHoog = function (number) {
    console.log("Entering vatHoog..");
    console.log("Input: ", number);
    let result = number;
    if (number < 0) {
        return 1.21 * number;
    }
    console.log("Output: ", result);
    return result;
}
console.log(vatHoog(1000));






/* deze is goed
  const vatHoog = function (number1, number2) {
    const squared = number1 * number2;
    return squared;
}
console.log(vatHoog(1000, 1.21));*/