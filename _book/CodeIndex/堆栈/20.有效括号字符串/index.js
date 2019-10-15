/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    while (s.length) {
        var temp = s;
        s = s.replace('()', '').replace('[]', '').replace('{}', '');
    }
    return s.length === 0;
};

// var isValid = function (s) {
//     var map = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//     }
//     while (s.length) {
//         var left = s[0];
//         if (!(left in map)) return false;
//         var i = 1;
//         while (s[i] != map[left] && i < s.length) left = s[i++];
//         if (s[i] != map[left]) return false
//         s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
//     }
//     return true;
// };

// var isValid = function(s) {
//     var map = {
//         ")": "(",
//         "]": "[",
//         "}": "{"
//     } // 写一个字典，建立对应关系
//     var stack = []
//     for(let key of s){
//         if(!map.hasOwnProperty(key)){
//             stack.push(key)
//         }else{
//             if(stack.pop() != map[key]){
//                 return false
//             }
//         }
//     }
//     return !stack.length;
// };

var str = "[[]]"
console.log(isValid(str))