function addDigits(num: number): number {
    if (num === 0)
        return 0;

    if (String(num).length === 1)
        return num;

    let numAsArrayOfDigits: number[] = String(num).split('').map((item: string) => Number(item));
    let sum = 0;

    numAsArrayOfDigits.forEach(num => {
        sum += num;
    })
   return addDigits(sum);
}

console.log(addDigits(38));
