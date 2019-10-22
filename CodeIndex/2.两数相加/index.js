/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Node类 
function Node(element) {
    this.element = element;
    this.next = null;
}

// LinkedList类
function LList() {
    console.log('---创建---')
    this.head = new Node("head");
    this.find = find; //查找指定节点
    this.insert = insert; //插入节点
    this.remove = remove; //删除节点
    this.display = display; //打印链表
    this.findNextEle = findNextEle; //查找存储指定节点的节点
}
// 查找当前节点
function find(item) {
    var currNode = this.head; //创建一个节点，并将头节点指向它
    while (currNode.element != item) {
        currNode = currNode.next; // 如果currNode的值不是我们找的值，向下查找
    }
    return currNode;
}
// 添加操作
function insert(newElement, item) {
    var newNode = new Node(newElement); // 创建要插入的节点
    var current = this.find(item); //找到要插入的节点
    newNode.next = current.next; //要添加位置节点的next -> 查找到节点的next
    current.next = newNode; // 被缇娜家位置的节点
}
// 查找当前节点得下一个节点
function findNextEle(item) {
    var currNode = this.head
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next
    }
    return currNode
}
// 删除操作
function remove(item) {
    console.log('---删除---', item)
    var preNode = this.findNextEle(item) //找到存储着《待删除节点》的节点
    if (!(preNode.next == null)) {
        preNode.next = preNode.next.next // 存储着 《待删除节点》.next -> .next.next
    }
}

// 测试方法-打印链表的每一个元素

function display() {
    var currNode = this.head
    while (!(currNode.next == null)) {
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}
var testCities1 = new LList()
testCities1.insert('2', 'head')
testCities1.insert('4', '2')
testCities1.insert('3', '4')

var testCities2 = new LList()
testCities2.insert('5', 'head')
testCities2.insert('6', '5')
testCities2.insert('4', '6')


var addTwoNumbers = function(l1, l2) {
    var num1 = num2 = ''
    var currNode1 = l1.head, currNode2 = l2.head
    while(!(currNode1.next == null)){
        num1 += currNode1.next.element
        currNode1 = currNode1.next
    }
    while(!(currNode2.next == null)){
        num2 += currNode2.next.element
        currNode2 = currNode2.next
    }
    var sum = (Number(num1)+Number(num2)).toString()
    
    var newNode = new Node('head')
    var index = 0
    while(index < 3){
        var current = new Node(Number(sum[index]))
        newNode.next = current
        console.log(newNode,'newNode')
        index++

        // newNode.next = current.next; //要添加位置节点的next -> 查找到节点的next
        // current.next = newNode; // 被缇娜家位置的节点
    }
    console.log(newNode)
};
addTwoNumbers(testCities1, testCities2)