/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// var findMedianSortedArrays = function(nums1, nums2) {
//     var arr = []
//     arr = nums1.concat(nums2) // 合并
//     var mid = Math.floor(arr.length / 2) //
//     arr.sort((a, b) => {
//         return a - b
//     })
//     // 根据数组的长度，判断中位数是否需要平均分
//     if (arr.length % 2 == 0) {
//         return ((arr[mid] + arr[mid - 1]) / 2).toFixed(1)
//     } else {
//         return arr[mid].toFixed(1)
//     }
// };
// var res = findMedianSortedArrays([1], [3, 4])
// console.log(res, 'res')


var findMedianSortedArrays = function(nums1, nums2) {
    var m = A.length;
    var n = B.length;
    if (m > n) { // to ensure m<=n
        int[] temp = A;
        A = B;
        B = temp;
        int tmp = m;
        m = n;
        n = tmp;
    }
    int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;
    while (iMin <= iMax) {
        int i = (iMin + iMax) / 2;
        int j = halfLen - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1; // i is too small
        } else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1; // i is too big
        } else { // i is perfect
            int maxLeft = 0;
            if (i == 0) { maxLeft = B[j - 1]; } else if (j == 0) { maxLeft = A[i - 1]; } else { maxLeft = Math.max(A[i - 1], B[j - 1]); }
            if ((m + n) % 2 == 1) { return maxLeft; }

            int minRight = 0;
            if (i == m) { minRight = B[j]; } else if (j == n) { minRight = A[i]; } else { minRight = Math.min(B[j], A[i]); }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};
var res = findMedianSortedArrays([1], [3, 4])
console.log(res, 'res')




/*
方法：递归法
为了解决这个问题，我们需要理解 “中位数的作用是什么”。在统计中，中位数被用来：

将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。

如果理解了中位数的划分作用，我们就很接近答案了。

首先，让我们在任一位置 ii 将 \text{A}A 划分成两个部分：

          left_A             |        right_A
    A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
由于 \text{A}A 中有 mm 个元素， 所以我们有 m+1m+1 种划分的方法（i = 0 \sim mi=0∼m）。

我们知道：

\text{len}(\text{left\_A}) = i, \text{len}(\text{right\_A}) = m - ilen(left_A)=i,len(right_A)=m−i.

注意：当 i = 0i=0 时，\text{left\_A}left_A 为空集， 而当 i = mi=m 时, \text{right\_A}right_A 为空集。

采用同样的方式，我们在任一位置 jj 将 \text{B}B 划分成两个部分：

          left_B             |        right_B
    B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
将 \text{left\_A}left_A 和 \text{left\_B}left_B 放入一个集合，并将 \text{right\_A}right_A 和 \text{right\_B}right_B 放入另一个集合。 再把这两个新的集合分别命名为 \text{left\_part}left_part 和 \text{right\_part}right_part：

          left_part          |        right_part
    A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
    B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
如果我们可以确认：

\text{len}(\text{left\_part}) = \text{len}(\text{right\_part})len(left_part)=len(right_part)
\max(\text{left\_part}) \leq \min(\text{right\_part})max(left_part)≤min(right_part)
那么，我们已经将 \{\text{A}, \text{B}\}{A,B} 中的所有元素划分为相同长度的两个部分，且其中一部分中的元素总是大于另一部分中的元素。那么：

\text{median} = \frac{\text{max}(\text{left}\_\text{part}) + \text{min}(\text{right}\_\text{part})}{2}
median= 
2
max(left_part)+min(right_part)
​	
 

要确保这两个条件，我们只需要保证：

i + j = m - i + n - ji+j=m−i+n−j（或：m - i + n - j + 1m−i+n−j+1）
如果 n \geq mn≥m，只需要使 \ i = 0 \sim m,\ j = \frac{m + n + 1}{2} - i \\ i=0∼m, j= 
2
m+n+1
​	
 −i

\text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 以及 \text{A}[i-1] \leq \text{B}[j]A[i−1]≤B[j]

ps.1 为了简化分析，我假设 \text{A}[i-1], \text{B}[j-1], \text{A}[i], \text{B}[j]A[i−1],B[j−1],A[i],B[j] 总是存在，哪怕出现 i=0i=0，i=mi=m，j=0j=0，或是 j=nj=n 这样的临界条件。
我将在最后讨论如何处理这些临界值。

ps.2 为什么 n \geq mn≥m？由于0 \leq i \leq m0≤i≤m 且 j = \frac{m + n + 1}{2} - ij= 
2
m+n+1
​	
 −i，我必须确保 jj 不是负数。如果 n < mn<m，那么 jj 将可能是负数，而这会造成错误的答案。

所以，我们需要做的是：

在 [0，m][0，m] 中搜索并找到目标对象 ii，以使：

\qquad \text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 且 \text{A}[i-1] \leq \text{B}[j],A[i−1]≤B[j], 其中 j = \frac{m + n + 1}{2} - ij= 
2
m+n+1
​	
 −i

接着，我们可以按照以下步骤来进行二叉树搜索：

设 \text{imin} = 0imin=0，\text{imax} = mimax=m, 然后开始在 [\text{imin}, \text{imax}][imin,imax] 中进行搜索。

令 i = \frac{\text{imin} + \text{imax}}{2}i= 
2
imin+imax
​	
 ， j = \frac{m + n + 1}{2} - ij= 
2
m+n+1
​	
 −i

现在我们有 \text{len}(\text{left}\_\text{part})=\text{len}(\text{right}\_\text{part})len(left_part)=len(right_part)。 而且我们只会遇到三种情况：

\text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 且 \text{A}[i-1] \leq \text{B}[j]A[i−1]≤B[j]：
这意味着我们找到了目标对象 ii，所以可以停止搜索。

\text{B}[j-1] > \text{A}[i]B[j−1]>A[i]：
这意味着 \text{A}[i]A[i] 太小，我们必须调整 ii 以使 \text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i]。
我们可以增大 ii 吗？
      是的，因为当 ii 被增大的时候，jj 就会被减小。
      因此 \text{B}[j-1]B[j−1] 会减小，而 \text{A}[i]A[i] 会增大，那么 \text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 就可能被满足。
我们可以减小 ii 吗？
      不行，因为当 ii 被减小的时候，jj 就会被增大。
      因此 \text{B}[j-1]B[j−1] 会增大，而 \text{A}[i]A[i] 会减小，那么 \text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 就可能不满足。
所以我们必须增大 ii。也就是说，我们必须将搜索范围调整为 [i+1, \text{imax}][i+1,imax]。
因此，设 \text{imin} = i+1imin=i+1，并转到步骤 2。

\text{A}[i-1] > \text{B}[j]A[i−1]>B[j]：
这意味着 \text{A}[i-1]A[i−1] 太大，我们必须减小 ii 以使 \text{A}[i-1]\leq \text{B}[j]A[i−1]≤B[j]。
也就是说，我们必须将搜索范围调整为 [\text{imin}, i-1][imin,i−1]。
因此，设 \text{imax} = i-1imax=i−1，并转到步骤 2。

当找到目标对象 ii 时，中位数为：

\max(\text{A}[i-1], \text{B}[j-1]),max(A[i−1],B[j−1]), 当 m + nm+n 为奇数时

\frac{\max(\text{A}[i-1], \text{B}[j-1]) + \min(\text{A}[i], \text{B}[j])}{2}, 
2
max(A[i−1],B[j−1])+min(A[i],B[j])
​	
 , 当 m + nm+n 为偶数时

现在，让我们来考虑这些临界值 i=0,i=m,j=0,j=ni=0,i=m,j=0,j=n，此时 \text{A}[i-1],\text{B}[j-1],\text{A}[i],\text{B}[j]A[i−1],B[j−1],A[i],B[j] 可能不存在。
其实这种情况比你想象的要容易得多。

我们需要做的是确保 \text{max}(\text{left}\_\text{part}) \leq \text{min}(\text{right}\_\text{part})max(left_part)≤min(right_part)。 因此，如果 ii 和 jj 不是临界值（这意味着 \text{A}[i-1], \text{B}[j-1],\text{A}[i],\text{B}[j]A[i−1],B[j−1],A[i],B[j] 全部存在）, 那么我们必须同时检查 \text{B}[j-1] \leq \text{A}[i]B[j−1]≤A[i] 以及 \text{A}[i-1] \leq \text{B}[j]A[i−1]≤B[j] 是否成立。
但是如果 \text{A}[i-1],\text{B}[j-1],\text{A}[i],\text{B}[j]A[i−1],B[j−1],A[i],B[j] 中部分不存在，那么我们只需要检查这两个条件中的一个（或不需要检查）。
举个例子，如果 i = 0i=0，那么 \text{A}[i-1]A[i−1] 不存在，我们就不需要检查 \text{A}[i-1] \leq \text{B}[j]A[i−1]≤B[j] 是否成立。
所以，我们需要做的是：

在 [0，m][0，m] 中搜索并找到目标对象 ii，以使：

(j = 0(j=0 or i = mi=m or \text{B}[j-1] \leq \text{A}[i])B[j−1]≤A[i]) 或是
(i = 0(i=0 or j = nj=n or \text{A}[i-1] \leq \text{B}[j]),A[i−1]≤B[j]), 其中 j = \frac{m + n + 1}{2} - ij= 
2
m+n+1
​	
 −i

在循环搜索中，我们只会遇到三种情况：

(j = 0(j=0 or i = mi=m or \text{B}[j-1] \leq \text{A}[i])B[j−1]≤A[i]) 或是 (i = 0(i=0 or j = nj=n or \text{A}[i-1] \leq \text{B}[j])A[i−1]≤B[j])，这意味着 ii 是完美的，我们可以停止搜索。
j > 0j>0 and i < mi<m and \text{B}[j - 1] > \text{A}[i]B[j−1]>A[i] 这意味着 ii 太小，我们必须增大它。
i > 0i>0 and j < nj<n and \text{A}[i - 1] > \text{B}[j]A[i−1]>B[j] 这意味着 ii 太大，我们必须减小它。
感谢 @Quentin.chen 指出：i < m \implies j > 0i<m⟹j>0 以及 i > 0 \implies j < ni>0⟹j<n 始终成立，这是因为：

m \leq n,\ i < m \implies j = \frac{m+n+1}{2} - i > \frac{m+n+1}{2} - m \geq \frac{2m+1}{2} - m \geq 0
m≤n, i<m⟹j= 
2
m+n+1
​	
 −i> 
2
m+n+1
​	
 −m≥ 
2
2m+1
​	
 −m≥0

m \leq n,\ i > 0 \implies j = \frac{m+n+1}{2} - i < \frac{m+n+1}{2} \leq \frac{2n+1}{2} \leq n
m≤n, i>0⟹j= 
2
m+n+1
​	
 −i< 
2
m+n+1
​	
 ≤ 
2
2n+1
​	
 ≤n

所以，在情况 2 和 3中，我们不需要检查 j > 0j>0 或是 j < nj<n 是否成立。

 */