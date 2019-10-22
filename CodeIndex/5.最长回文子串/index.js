/**
 * @param {string} s
 * @return {string}
 */
var str = "babad"
function longestPalindrome(str) {
    var res = ''

    var arr = str.split('')
    var resArr = arr.slice().reverse()
    console.log(arr,resArr)
    arr.forEach((e, i) => {
        if(resArr.indexOf(e)){
            res += e
        }
    });
    console.log(res,"res")
};
longestPalindrome(str)
