/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

var merge = function(inter) {
    var res = [],
        left = [],
        right = []
    inter.forEach(e => {
        left.push(e[0])
        right.push(e[1])
    });
    function newSort(a, b) {
        return a - b
    }
    left = left.sort(newSort)
    right = right.sort(newSort)
    var index = 0,
        len = left.length - 1
        count = 0
    while (index < len) {
        
        var leftIdx = ((left[index + 1] > left[index]) ? index : index + 1) //选取左边界最小的留下
        var rightIdx = ((right[index + 1] > right[index]) ? index + 1 : index) //选取右边界最大留下
        res.count = 
    }
    return res
};
var res = merge([[1, 3],[2, 6],[4, 6],[1, 10]])
console.log(res, '结果')