/**
 * @param {string} s
 * @return {boolean}
 */

// var isValid = function (s) {
//     while (s.length) {
//         var temp = s;
//         s = s.replace('()', '');
//         s = s.replace('[]', '');
//         s = s.replace('{}', '');
//         if (s == temp) return false
//     }
//     return true;
// };

var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    while (s.length) {
        var left = s[0];
        if (!(left in map)) return false;
        var i = 1;
        while (s[i] != map[left] && i < s.length) left = s[i++];
        if (s[i] != map[left]) return false
        s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
    }
    return true;
};

var str = "({})"
console.log(isValid(str))