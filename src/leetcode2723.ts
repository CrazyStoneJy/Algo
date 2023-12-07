type P = Promise<number>;

export default async function addTwoPromises(promise1: P, promise2: P): Promise<number> {
    return new Promise<number>(async (resolve) => {
        const [a, b] = await Promise.all([promise1, promise2]);
        resolve(a + b);
    });
};