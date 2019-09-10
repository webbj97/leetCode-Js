var KthLargest = function(k, nums) {
    var arr = [],
        min = 0,
        idx = 0
    nums.forEach(e => {
        if (arr.length < k) {
            arr.push(e)
        } else {
            if (e > arr[0]) {
                arr.splice(0, 1)
                arr.push(e)
            }
        }
        console.log('arr:', arr, '当前比较值', e);
    });
    arr = arr.sort(sortNumber)
    return arr
};
KthLargest.prototype.add = function(val) {
    console.log(':', val);
    
};
function sortNumber(a, b) {
    return a - b
}

var res = new KthLargest(3, [4, 5, 8, 2, 6])
res.add(1)
// console.log('结果:', res);