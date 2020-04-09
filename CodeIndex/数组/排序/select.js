var selectSort = function(nums) {
    var temp = 0
    for (let i = 0; i < nums.length - 1; i++) {
        var min = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[min] > nums[j]) {
                min = j
            }
        }
        if (min !== i) {
            temp = nums[i]
            nums[i] = nums[min]
            nums[min] = temp
        }

    }
    return nums
}

selectSort([1, 2, 3, 2, 1, 4, 7, 1])