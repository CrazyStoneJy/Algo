type Point = {
    x: number;
    y: number;
    val?: string;
}
const res: string[] = [];

// todo 算法有问题
export function findWords(board: string[][], words: string[]): string[] {
    const matrix: Point[][] = board.map((cells: string[], i: number) => {
        return cells.map((str: string, j: number) => {
            return {
                x: j,
                y: i,
                val: str
            };
        })
    })
    const dist: number[][] = output(words);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            dfs(matrix, { x: j, y: i }, [], dist, words);
        }
    }
    
    return res;
};

export function output(words: string[]): number[][] {
    return words.map((word: string) => {
        return convert(word);
    });
}

export function convert(str: string): number[] {
    const arr: number[] = Array.from({ length: 26 }, () => {
        return 0;
    });
    for (let i = 0; i < str.length; i++) {
        const s = str.codePointAt(i);
        const a = 'a'.codePointAt(0);
        arr[s - a] += 1;
    }
    return arr;
}

// a contain b
function contain(a: number[], b: number[]): boolean {
    return b.every((e: number, index: number) => {
        return a[index] >= e;
    });
}

export function ocontain(dist: number[][], t: number[]): boolean {
    return dist.some((d: number[]) => {
        return contain(d, t);
    });
}

function oequals(dist: number[][], t: number[]): number {
    let index = -1;
    dist.forEach((d: number[], i: number) => {
        if (isEquals(d, t)) {
            index = i;
            return;
        }
    });
    return index;
}

function isEquals(a: number[], b: number[]): boolean {
    return contain(a, b) && contain(b, a);
}

function getString(store: Point[]): string {
    return store.map((p: Point) => p.val).join('');
}

function contains<T extends Point>(points: T[], point: T): boolean {
    return points.some((p: Point) => {
        return p.x === point.x && p.y === point.y;
    });
}

function dfs(matrix: Point[][], start: Point, store: Point[], dist: number[][], words: string[]) {
    const v = matrix.length;
    const h = matrix[0].length;
    const point = matrix[start.y][start.x];
    if (contains(store, point)) {
        return;
    }
    store.push(point);
    const temp: string = getString(store);
    const t: number[] = convert(temp);
    if (ocontain(dist, t)) {
        let index: number = -1;
        if ((index = oequals(dist, t)) >= 0) {
            // 去重
            if (res.indexOf(words[index]) < 0) {
                res.push(words[index]);
            }
        }

        const adjacents = getAdjacents(point, v, h);
        adjacents.forEach((p: Point) => {
            dfs(matrix, p, store, dist, words);
        });
    }

    // remove
    store.splice(store.length - 1, 1);
}

const dirs = [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 }
];
function getAdjacents(point: Point, v: number, h: number): Point[] {
    const adjacents: Point[] = [];
    dirs.forEach((p: Point) => {
        const x = p.x + point.x;
        const y = p.y + point.y;
        if (x >= 0 && x < h && y >= 0 && y < v) {
            adjacents.push({ x, y });
        }
    })
    return adjacents;
}