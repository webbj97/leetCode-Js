/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-22 13:40:30
 */
var maximum69Number  = function(num) {
    var str = num.toString().split('')
    for(let i = 0; i < str.length; i++){
        if(str[i] == 6){
            str[i] = 9
            str = str.join().replace(/,/g, '')
            return Number(str)
        }
    }
    return num
};

var res = maximum69Number(9996)
console.log('res:', res);