/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

var merge = function(inter) {
    var res = [],start = 0,end = 1
    function newSort(a,b){
        return a[0]-b[0]
    }
    inter.sort(newSort)
    console.log(inter)

    inter[0].end<inter[1].start
    inter[j].end<inter[k].start
    inter[i].end≥inter[k].start

    if(inter[0][end] < inter[1][start] || 1 == 1){
        console.log(inter[0][end] , inter[1][start])
    }

    
    return res
};
var res = merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])
console.log(res, '结果')