function isPalindrome(s: string): boolean {
    const arr = Array.from(s.toLowerCase()).map((c: string) => {
        if (isAlphabet(c) || isNumber(c)) {
            return c;
        } else {
            return "";
        }
    }).filter((c: string) => {
        return c !== '';
    });
    // console.log(arr);
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isAlphabet(s: string): boolean {
    return s >= 'a' && s <= 'z';
}

function isNumber(s: string): boolean {
    try {
        const num = parseInt(s);
        return num >= 0 && num <= 9;
    } catch (e) {
        return false;
    }
}