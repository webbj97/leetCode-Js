var isPalindrome = function(s) {
    var left = 0,
        right = s.length - 1;
    while (left < right) {
        var leftChar = s.charAt(left).toLowerCase();
        while ((!(leftChar >= 'a' && leftChar <= 'z') && !(leftChar >= '0' && leftChar <= '9')) && left < right) {
            left++;
            leftChar = s.charAt(left).toLowerCase();
        }
        var rightChar = s.charAt(right).toLowerCase();
        while ((!(rightChar >= 'a' && rightChar <= 'z') && !(rightChar >= '0' && rightChar <= '9')) && left < right) {
            right--;
            rightChar = s.charAt(right).toLowerCase();
        }
        if (leftChar !== rightChar) {
            return false;
        }
        left++;
        right--;
    }
    return true
};