console.log((function increasedArray(array: string[]): string[] {
    let asString = array.join('');
    let asNumber = +asString + 1;
    let asCharArray = (asNumber + '').split('')
    return [...asCharArray];

})(['9','9']))
