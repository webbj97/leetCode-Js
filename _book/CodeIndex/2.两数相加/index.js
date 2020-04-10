// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

var addTwoNumbers = function(l1, l2) {
    var list1 = [];
    var list2 = [];
    var l3 = new ListNode(null);
    var node = l3;
    var pre = 0;
    while (l1 != null || l2 != null) {
        list1.push((l1 != null) ? l1.val : 0);
        list2.push((l2 != null) ? l2.val : 0);
        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next
    }
    for (var i = 0; i < list1.length; i++) {
        let sum = 0;
        sum = list1[i] + list2[i] + pre;
        if (sum >= 10) {
            pre = 1;
            sum = sum - 10;
        } else {
            pre = 0;
        }
        node.next = new ListNode(sum);
        node = node.next;
        if (i == (list1.length - 1) && pre == 1) {
            node.next = new ListNode(1);
            node = node.next;
        }
    }
    return l3.next;
};

return dummyHead.next;

var res = addTwoNumbers(l1, l2)
console.log('ress:', res);