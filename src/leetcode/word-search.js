function exist(board, word) {
    var count = 0;
    var newWord = '';
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < board.length; j++) {
            var indexOfElem = board[j].indexOf(word[i]);
            if (indexOfElem !== -1) {
                board[j].splice(indexOfElem, 1);
                count++;
                break;
            }
            // for (let k = 0; k < board[j].length; k++) {
            //
            // }
        }
        if (count === word.length) {
            return true;
        }
    }
    return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'));
