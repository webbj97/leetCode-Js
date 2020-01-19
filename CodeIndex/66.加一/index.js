// var plusOne = function(digits) {
//     let len = digits.length;
//     for (let i = len - 1; i >= 0; i--) {
//         digits[i] += 1;
//         if (digits[i] < 10) {
//             return digits
//         }
//         digits[i] = 0;
//         if (i == 0) {
//             digits.unshift('1')
//             return digits
//         }
//     }
// };


var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) return digits;
    }
    digits = new Array(digits.length+1, 0);
    digits[0] = 1;
    return digits;
};


var res = plusOne([9,9])
console.log('res:', res);