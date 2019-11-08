/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) return null;
    var temp = {
        val: -1,
        next: head
    }
    var search = temp;
    while (search.next) {
        if (search.next.val == val) {
            search.next = search.next.next;
        } else {
            search = search.next;
        }
    }
    return temp.next;
};
