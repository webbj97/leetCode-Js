/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-06 15:09:40
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head, fast = head;
    while(fast && fast.next) {
        // 如果 快指针 走到终点，证明无环
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            // 记录相遇点
            // 新指针在起点，快指针在相遇点
            // 两个节点再次相遇时，一定在入口点
            var start = head;
            while (start !== fast) {
                start = start.next;
                fast = fast.next;
            }
            return fast;
        }
    }
    return null;
};
