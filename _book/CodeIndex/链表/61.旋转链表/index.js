/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-11 16:51:59
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 考虑转数组 -> 链表
// 反转链表
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null
    var cur = head
    var arr = [] // 节点数组
    var len = 0 // 节点长度
    while(cur){
        arr.push(cur.val)
        cur = cur.next
        len++
    }
    k = k % len // 去掉环
    while(k > 0){
        let temp = arr.pop()
        arr.unshift(temp)
        k--
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = new ListNode(arr[i])
    }
    var i = 0
    while(i < arr.length){
        arr[i].next = arr[i+1]
    }
    return arr[0]
};