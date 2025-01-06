const fibonacci = function (n) {
    const num = Number(n);
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num == 2) {
        return 1;
    }

    const arr = new Array(num);
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
