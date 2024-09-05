function backspaceCompare(s: string, t: string): boolean {

    let sCharArray = s.split('');

    for (let i = 0; i < sCharArray.length; i++) {
        if (s[i] === '#') {
            sCharArray.splice(i,1)
            sCharArray.splice(i-1,1)
        }
    }

    console.log()

    return true;
}

console.log(backspaceCompare('ab#c', 'ad#c'));
