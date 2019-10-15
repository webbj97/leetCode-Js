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
    //先找一个值的情况
    //arr[len] >= 目标值，才有可能出现1=1的情况
    if(arr[len] >= target){
        var index = arr.indexOf(target)
        if(index != -1) {
            res.push([target])
            arr.splice(index, 1)
            while(arr[0] + arr[arr.length-1] > target){
                arr.length = arr.length-1
            }
            // if(arr[0] + arr[arr.length-1] > target){
            //     console.log('arr:11', arr);
            // }
        }
        console.log('arr:1', arr);
        
    }else{

    }
    
    return res
};

var res = combinationSum([2,3,6,7], 7)
console.log('res:', res);