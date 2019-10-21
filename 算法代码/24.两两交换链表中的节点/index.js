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
var node = {
    element: 'head',
    next:{
        element: 1,
        next:{
            element: 2,
            next:{
                elememt: 3,
                next:{
                    element: 4,
                    next: null
                }
            }
        }
    }
}
var swapPairs = function(head) {
    current = new ListNode(head)
    current.next = 
    // while((current.next == null)
};

console.log(node,'node')