var str = 'aaabbb+cccddd'
var reg = /(\w*)+(\+\w*)/
console.log('结果:', str.replace(reg, '$1'));
