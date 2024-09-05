const prom = new Promise((resolve, reject) => {
    resolve(1);
});
const prom2 = new Promise((resolve, reject) => {
    resolve(2);
});

const prom3 = new Promise((resolve, reject) => {
    resolve(3);
});

(async function getNumbers() {

    try {
        const numbers = await Promise.all([prom, prom2, prom3]);
        console.log(numbers)
    } catch (e){
        console.log(e)
    }

})()

