/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, target) {
    var len = num.length
    var i = 0
    while(i < len){
        console.log('num:', num[i]);
        var temp = target - num[i]
        if(num.lastIndexOf(temp) != -1){
            return [i+1, num.lastIndexOf(temp)+1]
        }
        i++
    }
};

var res = twoSum([2, 3, 4], 6)
console.log('res:', res);
