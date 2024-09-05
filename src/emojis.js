
//
// size = n x n
//
// first diagonal => 10 + 25 + 37 + 50
// second diagonal => 40 + 35 + 29 + 32


function diagonalSum(array) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < array.length; i++) {
        firstDiagonal += array[i][i];
        secondDiagonal += array[i][array.length - 1 - i];
    }


    return {
        firstDiagonal: firstDiagonal,
        secondDiagonal: secondDiagonal,
    };

}

console.log(diagonalSum([ [   10, 20, 30, 40 ],
    [ 15, 25, 35, 45 ],
    [ 27, 29, 37, 48 ],
    [ 32, 33, 39, 50 ] ]))
