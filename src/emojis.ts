//[7, 2, 2, 6, 10, 10, 10, 2]
//[7, 4, 6, 30, 2]

function combineNeighbours(array: number[]) {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1 && array[i] === array[i + 1]) {
            result.push(array[i] + array[i + 1]);
        } else {
            result.push(array[i]);
        }
    }
}

