/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-20 16:43:41
 */
// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

// 示例 1:

// 输入:
// "tree"

// 输出:
// "eert"

// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let index = 0;
    let count = 1;

    let result = '';

    const map = new Map();

    while (index < s.length) {
        const char = s.charAt(index);

        // 若已存在，则在原来的计数基础上 +1，否则是新的字符
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, count);

        index++;
    }

    // 按 key - value 的 value 也就是 count 个数，以降序排列
    const sortMap = [...map].sort((a, b) => b[1] - a[1]);

    // 重复字符，累加：sortMap = ["字符", "个数"]
    sortMap.map((item) => (result += item[0].repeat(item[1])));

    return result;
};


var res = frequencySort('tree')
console.log('res:', res);