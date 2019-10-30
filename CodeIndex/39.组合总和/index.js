// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    var res = []
    var len = arr.length - 1//边界值
    index = 0//下标
    for(let i = 0; i < arr.length; i++){
        let a = target-arr[i]
        while(a >= 0){
            if(arr.indexOf(a) >= 0){
                res.push()
            }
        }
        
    }
    
    return res
};

var res = combinationSum([2,3,6,7], 7)
console.log('res:', res);