// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

var addTwoNumbers = function(l1, l2) {
    var one = 0,
        lenOne = 0;
    var two = 0,
        lenTwo = 0;
    var sum = 0
    var res = {}
    while (l1) {
        multiple = Math.pow(10, lenOne)
        one = one + l1.val * multiple
        l1 = l1.next
        lenOne++
    }
    while (l2) {
        multiple = Math.pow(10, lenTwo)
        two = two + l2.val * multiple
        l2 = l2.next
        lenTwo++
    }
    sum = String(one+two)
    for(let i = 0;i < sum.length; i++){
        obj.val = sum[i]
        obj.next = {}
        console.log('obj:', obj);

    }
    console.log('one+two:', typeof sum);

};
var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
var res = addTwoNumbers(l1, l2)
console.log('ress:', res);