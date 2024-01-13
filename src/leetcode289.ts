/**
 Do not return anything, modify board in-place instead.
 */
 function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;
    const matrix = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const neighbors: Point[] = getNeighbors({x: j, y: i}, m, n);
            matrix[i][j] = getNumber(board, {x: j, y: i}, neighbors);
        }
    }
    // console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            board[i][j] = matrix[i][j];
        }
    }
};

function getNumber(board: number[][], point: Point, points: Point[]): number {
    const count = points.filter((point: Point) => {
        return board[point.y][point.x] === 1;
    }).length;
    if (board[point.y][point.x] === 1) {
        if (count < 2) {
            return 0;
        } else if (count >= 2 && count <= 3) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (count === 3) {
            return 1;
        }
    }
    return 0;
}

interface Point {
    x: number;
    y: number;
}

const dirs = [
    {x: -1, y: -1},
    {x: 0, y: -1},
    {x: 1, y: -1},
    {x: -1, y: 0},
    {x: 1, y: 0},
    {x: -1, y: 1},
    {x: 0, y: 1},
    {x: 1, y: 1}
]
function getNeighbors(point: Point, m: number, n: number): Point[] {
    const points: Point[] = [];
    dirs.forEach((dir: {x: number, y: number}) => {
        // check range
        const x = point.x + dir.x;
        const y = point.y + dir.y;
        if (x < 0 || x >= n || y < 0 || y >= m) {
            return;
        }
        points.push({x, y});
    });
    return points;
}