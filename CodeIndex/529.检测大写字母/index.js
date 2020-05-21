/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-21 18:07:57
 */
/**
 * @param {string} word
 * @return {boolean}
 */
function changeWord(s) {
    var newS = s.toUpperCase()
    return newS === s
}
var detectCapitalUse = function(word) {
    const len = word.length

    if(len === 1 && !changeWord(word)) return true
    if(changeWord(word[0])){
        let index = 1
        for(let i = 1; i < len; i++){
            if(changeWord(word[i])) index++
        }
        return index === len || index === 1
    }
    if(!changeWord(word[0])){
        for(let i = 1; i < len; i++){
            if(changeWord(word[i])) return false
        }
        return true
    }
    return false
};

var res = detectCapitalUse('SsssS')
console.log('res:', res);