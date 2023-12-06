function sum(a: number, b: number): number {
    return a + b;
}
describe('test', () => {
    test('sum', () => {
        console.log("test");
        expect(sum(2, 3)).toBe(5);
    });
});
