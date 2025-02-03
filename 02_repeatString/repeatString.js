let repeat = 3;
const str = "hay"

const repeatString = function (string, num) {
    if (num === 0) {
        return "Error";
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string
    }
    return result;
}

module.exports = repeatString;