let askjdjashdsajd = ["bella", "label", "roller"];


function commonChars(words: string[]): string[] {
    const firstElemt = words[0];
    const otherWords: string[] = words.slice(1)
    const includingDuplicates = [];


    for (let i = 0; i < firstElemt.length; i++) {
        if (otherWords.every((word: string) => word.includes(firstElemt[i]))) {
            includingDuplicates.push(firstElemt[i])
        }
    }

    return includingDuplicates;
}

console.log(commonChars(askjdjashdsajd))
