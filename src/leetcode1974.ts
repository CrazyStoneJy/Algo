export function minTimeToType(word: string): number {
    let count = word.length;
    if (word.length === 1) {
        return 2;
    } else {
        let last = 'a'.charCodeAt(0);
        for (let i = 0; i < word.length; i++) {
            const c = word.charCodeAt(i);
            const offset = Math.abs(c - last) <= 12 ? Math.abs(c - last) : (26 - Math.abs(c - last));
            count += offset;
            last = c;
        }
        return count;
    }
};