const words: string[] = ["qwer","Hello", "Alaska","jkl", "Dad", "Peace", "zxc"]

function findWords(words: string[]): string[] {
    const firstRow: string = 'qwertyuiop'
    const secondRow: string = 'asdfghjkl'
    const thirdRow: string = 'zxcvbnm'

    const oneLineWords: string[] = [];

    words.forEach((word: string) => {

        const isFirstRowNotContains = word.toLowerCase().split('').some((char: string) => !firstRow.includes(char));
        const isSecondRowNotContains = word.toLowerCase().split('').some((char: string) => !secondRow.includes(char));
        const isThirdRowNotContains = word.toLowerCase().split('').some((char: string) => !thirdRow.includes(char));
        if (!isFirstRowNotContains || !isSecondRowNotContains || !isThirdRowNotContains) {
            oneLineWords.push(word);
        }
    });

    return oneLineWords;
}


console.log(findWords(words));
