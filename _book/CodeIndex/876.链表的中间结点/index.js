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
// var middleNode = function(head) {
//     var node = head, arr = [],len = 0
//     while(node){
//         arr[len++] = node
//         node = node.next
//     }
//     return arr[arr.length >> 1]
// };

// var middleNode = function(head) {
//     var len = 0, cur = head
//     while(cur){
//         len++
//         cur = cur.next
//     }
//     var mid = len >> 1
//     var k = 0
//     cur = head
//     while(k < mid){
//         k++
//         cur = cur.next
//     }
//     return cur
// };

var middleNode = function(head) {
    var slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};