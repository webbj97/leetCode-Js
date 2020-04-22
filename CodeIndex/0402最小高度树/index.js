/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-16 16:03:14
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    var mid = nums.length >> 1
    var n = new TreeNode(nums[mid])
    n.left = sortedArrayToBST(nums.slice(0, mid))
    n.right = sortedArrayToBST(nums.slice(mid+1))
    return n
};

var res = sortedArrayToBST([-10,-3,0,5,9])
console.log('res:', res);
