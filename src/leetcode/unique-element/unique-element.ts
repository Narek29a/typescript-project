const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumber = numbers.find((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
