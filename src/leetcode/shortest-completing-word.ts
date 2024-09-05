function shortestCompletingWord(licensePlate: string, words: string[]): string {
    let shortest = [];
    let fixedLicensePlate = licensePlate.toLowerCase().replace(' ', '');
    for (let i = 0, j = 0; i < words.length, j < words[i].length; i++, j++) {
        if (fixedLicensePlate.includes(words[i][j])){
            shortest.push(words[i][j]);
        }
    }


    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; i++) {
            if (!isCharCaseOrNumber(licensePlate[i]) &&) {
            }
        }
    }

    for (let i = 0; i < licensePlate.length; i++) {
        if (!isCharCaseOrNumber(licensePlate[i]) &&) {
        }
    }
}

