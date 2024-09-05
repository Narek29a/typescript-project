function getPrimeNumbersUntil(targetNumber) {
    for (let i = 3; i < targetNumber; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}


function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


getPrimeNumbersUntil(15);
