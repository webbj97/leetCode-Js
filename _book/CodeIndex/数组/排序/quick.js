function quick(nums) {
    var mid = nums.length >> 1
    var midNum = nums.splice(mid, 1)
    var left = [],
        right = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[mid]) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return quick(left).concat([nums[mid]], quick(right))
}

var res = quick([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])