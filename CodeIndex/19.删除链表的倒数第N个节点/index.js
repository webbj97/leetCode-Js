/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     var current = head
//     var len = 0
//     while (current) {
//         len++
//         current = current.next
//     }
//     len = len - n
//     head = { val: '', next: head }
//     current = head
//     while (len != 0) {
//         current = current.next
//         len--
//     }
//     current.next = current.next.next
//     return head.next
// }

// var removeNthFromEnd = function(head, n) {
//     var current = { val: '', next: head }
//     var fast = current
//     var slow = current

//     for (let i = 1; i <= n + 1; i++) {
//         fast = fast.next;
//     }
//     while (fast != null) {
//         fast = fast.next;
//         slow = slow.next;
//     }
//     slow.next = slow.next.next;
//     return current.next;
// }

var removeNthFromEnd = function(head, n) {
    var arr = []
    var current = head
    var obj = {}
    while(current){
        arr.push(current.val)
    }
    for(let i = 0; arr.length; i++){
        if(i === arr.length - n){

        }
    }
}







