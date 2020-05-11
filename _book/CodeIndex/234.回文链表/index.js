/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-07 16:01:38
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     if(!head || !head.next) return true;
//     var slow = head
//     var fast = head
//     var prev = null
//     var temp = null
//     while(fast && fast.next){
//         fast = fast.next.next // 快指针走2个节点

//         temp = slow.next // 慢指针直接反转
//         slow.next = prev
//         prev = slow

//         slow = temp // 慢指针走1个节点
//     }
//     if(fast){
//         slow = slow.next
//     }
//     while(slow){
//         if(slow.val !== prev.val) return false;

//         slow = slow.next
//         prev = prev.next
//     }
//     return true
// };

var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    var arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    var left = 0, right = arr.length-1
    while(left < right){
        if(arr[left] !== arr[right]) return false
        left++
        right--
    }
    return true
};
