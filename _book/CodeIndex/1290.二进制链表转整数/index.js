/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-21 13:34:40
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
 * @return {number}
 */
// var getDecimalValue = function(head) {
//     var current = head
//     var num = 0
//     while(current){
//         num = num * 2 + current.val;
//         current = current.next
//     }
//     return num
// };

var getDecimalValue = function(head) {
    var current = head
    var str = ''
    while(current){
        str += current.val;
        current = current.next
    }
    return parseInt(str, 2)
};