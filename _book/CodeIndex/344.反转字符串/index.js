/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var res = s.reverse()
    return res
};

// 双指针
var reverseString = function(s) {
    let i = 0,
        x = s.length -1;
    while (i < x) {
        [s[i], s[x]] = [s[x], s[i]]
        i++
        x--
    }
};
