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
// var reverseList = function(head) {
//     let cur = head //  当前节点
//     let prev = null //  前置节点初始化（head节点无前置节点）
//     while (cur) {
//         let temp = cur.next //  保存当前节点的后置节点 之后递归到下一个节点需要
//         cur.next = prev
//         prev = cur
//         cur = temp
//     };
//     return prev
// };

var reverseList = function(head) {
    var cur = head
    var prev = null
    while(cur){
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
};
var res = reverseList()