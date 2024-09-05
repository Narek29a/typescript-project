function getCount(string) {
    let filteredArray = string.split(' ').filter(item => item.length > 0);
    console.log(filteredArray)
    let count = 0;
    filteredArray.forEach(item => {
        if (item.length > 1) {
            count++;
        }
    });
    return count;
}


console.log(getCount('    asd   d wqewyteyuwtewqy    '))
