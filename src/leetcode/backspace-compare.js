function backspaceCompare(s, t) {
    let sCharArray = s.split('');

    for (let i = 0; i < sCharArray.length; i++) {
        if (sCharArray[i] === '#') {
            sCharArray.splice(i,1)
            sCharArray.splice(i-1,1)
        }
    }
    console.log(sCharArray)
    return true;
}
console.log(backspaceCompare('aa##', 'ad#c'));
