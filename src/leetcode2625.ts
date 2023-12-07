type MultiDimensionalArray = (number | MultiDimensionalArray)[];


const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    return flatten(arr, n);
};

function flatten(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) {
        return arr;
    }
    // flatten
    const flattendArr = [];
    arr.forEach((value: number | MultiDimensionalArray) => {
        if (typeof value === 'number') {
            flattendArr.push(value);
            return;
        }
        flattendArr.push(...flatten(value, n - 1));
    });
    return flattendArr;
}

export default flat;