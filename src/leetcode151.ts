function reverseWords(s: string): string {
    return s.trim().split(' ').filter(el => el).reverse().join(' ');
 };