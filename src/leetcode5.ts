export function longestPalindrome(s: string): string {
    if (s.length === 1) {
        return s;
    }
    let max: number = -1;
    let maxStr: string = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j) && max < (j - i)) {
                maxStr = s.substring(i, j + 1);
                max = j - i;
            }
        }
    }
    return maxStr;
};

function isPalindrome(s: string, left: number, right: number) {
    while (left <= right) {
        if (s.substring(left, left + 1) === s.substring(right, right + 1)) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}