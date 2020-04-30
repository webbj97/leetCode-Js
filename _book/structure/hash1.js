// 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

// 在链表类中实现这些功能：

// get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
// addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
// addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
// addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
// deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。


// 示例：

// MyLinkedList linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
// linkedList.get(1);            //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// linkedList.get(1);            //返回3


var Node = function(ele){
    this.ele = ele; // 保存当前节点的值
    this.next = null; // 保存的下一个节点的地址
}

/**
 * 链表构造函数
 */
var MyLinkedList = function() {
    this.head = new Node('head')
    // this.find = find
};

/**
 * 查询 index 位节点
 * @param {index} index
 * @return {Node}
 */
MyLinkedList.prototype.find = function (index) {
    var i = 0 // 记录下标
    var current = this.head //新节点->head节点
    while(current.next){
        if(i == index){
            return current.next
        }
        i++
        current = current.next
    }
    return null
};

/**
 * 查询 index 位节点的值
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var _this = this //新节点->head节点
    var res = _this.find(index)
    return res ? res.ele : -1
};

/**
 * 插入到链表首位
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var current = this.head
    var node = new Node(val)
    node.next = current.next
    current.next = node
};

/**
 * 插入到链表首末位
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var current = this.head
    while(current.next){
        current = current.next
    }
    var node = new Node(val)
    current.next = node
};

/**
 * 在 index 位置插入值为 val 的节点
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0){
        this.addAtHead(val)
        return;
    }
    var current = this.head
    var i = 0
    while(current.next){
        if(i == index){
            var node = new Node(val)
            node.next = current.next
            current.next = node
            return;
        }
        i++
        current = current.next
    }

    this.addAtTail(val)
    return;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0) return;
    var i = 0
    var current = this.head
    while(current){
        if(i == index){
            current.next = current.next.next
            return;
        }
        i++
        current = current.next
    }
};
var node = new MyLinkedList()
node.addAtHead(2)
node.addAtHead(1)
node.addAtTail(3)
node.addAtIndex(4, 100)
node.addAtIndex(3, 50)
node.addAtIndex(3)
node.deleteAtIndex(3)
console.log('node:', node);




/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */