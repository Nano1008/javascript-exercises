const palindromes = function (str) {
    // Remove punctuation and word break
    const cleanStr = str.toLowerCase().replace(/[^\w]/g, "");

    const charArr = cleanStr.split("");
    const reversed = charArr.slice().reverse();
    return charArr.join("") === reversed.join("");
};


// Do not edit below this line
module.exports = palindromes;
