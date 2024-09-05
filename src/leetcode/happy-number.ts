function isHappy(n: number): boolean {
    if(n === 1)return true;
    //if(n.toString().length === 1) return false;
    let strN = n.toString();
    let finalNumber: number = strN
        .split('')
        .map((item: string) => +item * +item)
        .reduce((a,b) => a + b);
    console.log(finalNumber)

    if (finalNumber !== 1) {
        isHappy(finalNumber);
    }
    return true;
}

console.log(Array(new Set([5,9,8,5])))
