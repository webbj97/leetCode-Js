// 给定一个整数，将其转化为7进制，并以字符串形式输出。

// 示例 1:

// 输入: 100
// 输出: "202"
// 示例 2:

// 输入: -7
// 输出: "-10"

var convertToBase7 = function(num) {
    if(num === 0) return '0';
    var abs = true
    var str = ''
    if(num < 0){
        abs = false
        num = -num
    }
    while(num > 0){
        str = num % 7 + str // 10+'' = '10'
        num = num / 7 >> 0 // num = 3

    }
    return abs ? str : '-'+str
};

var res = convertToBase7(-7)
console.log('res:', res);

var obj = {
    content: [
        {name: 1, isUsed: true},
        {name: 2, isUsed: false},
        {name: 3, isUsed: false},
        {name: 4, isUsed: false},
    ]
}
