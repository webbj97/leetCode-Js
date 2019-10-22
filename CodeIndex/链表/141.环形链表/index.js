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
//利用set结构验证next的指向是否已经存在
var hasCycle = function(head) {
    var setBox = new Set()
    while(head != null){
        if(setBox.has(head.next)){
            return true
        }else{
            setBox.add(head.next)
            head = head.next
        }
    }
    return false
};

//快慢指针

