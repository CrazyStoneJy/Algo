/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
    mirror(matrix);
    diagonal(matrix);
};

function diagonal(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j =  i + 1; j < matrix[0].length; j++) {
            const temp: number = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

function mirror(matrix: number[][]): void {
    let left = 0, right = matrix.length - 1;
    const len = matrix[0].length;
    while (left < right) {
        for (let i = 0; i < len; i++) {
            const temp: number = matrix[left][i];
            matrix[left][i] = matrix[right][i];
            matrix[right][i] = temp;
        }
        left++;
        right--;
    }
}
