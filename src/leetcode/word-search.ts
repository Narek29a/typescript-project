

function exist(board: string[][], word: string): boolean {
    let count = 0;
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let indexOfElem = board[j].indexOf(word[i]);

            if (indexOfElem !== -1) {
                board[j].splice(indexOfElem, 1);
                count++;
                break;
            }
            if (count === word.length) {
                return true;
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


exist([["a"]], 'a');
