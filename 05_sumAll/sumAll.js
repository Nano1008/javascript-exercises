const sumAll = function (num1, num2) {
    // check if they are strings
    if (typeof num1 == "string" || typeof num2 == "string") {
        return "ERROR";
    }

    // check if they are posivite integers
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    let sumResult = 0;
    for (let start = min; start <= max; start++) {
        sumResult += start;
    }
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
