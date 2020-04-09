var sortArray = function(nums) {
    var obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    var arr = Object.keys(obj)
    var res = []
    for (let i = 0; i < arr.length; i++) {
        while (obj[arr[i]] !== 0) {
            res.push(arr[i])
            obj[arr[i]]--
        }
    }
    console.log('res:', res);
    return res
}

sortArray([3,3, 44, 38, 5, 47, 15, 36, 26, 27])