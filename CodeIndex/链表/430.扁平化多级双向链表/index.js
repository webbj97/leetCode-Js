/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

// 1---2---3---4---5---6--NULL
// |
// 7---8---9---10--NULL
//     |
//     11--12--NULL

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    var cur = head
    var temp = []
    while(cur && (cur.child || cur.next)) {
        if(cur.child){
            if(cur.next){
                temp.push(cur.next)
            }
            cur.child.prev = cur // 维护prev节点
            cur.next = cur.child // child节点顶替next节点
            cur.child = null
        }
        cur = cur.next // 向后一位
    }
    while(temp.length > 0){
        let node = temp.pop()
        node.prev = cur
        cur.next = node
        while(cur.next){
            cur = cur.next
        }
    }
    return head
};


var head = {
    val: 1,
    prev: null,
    child: null,
    next: {
        val: 2,
        prev: 1,
        child: null,
        next: {

        }
    }
}