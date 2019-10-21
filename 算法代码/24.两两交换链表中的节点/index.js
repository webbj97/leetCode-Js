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
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var swapPairs = function(head) {
    var current = {
        val: null,
        next: head
    }
    while(current.next && current.next.next){
        var a = current.next;
        var b = a.next;
        var c = null;
        c.next = b
        a.next = b.next
        b.next = a
        current = c.next.next
    }
    return current
};

console.log(node,'node')