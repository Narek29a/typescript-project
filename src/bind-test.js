function asd() {
    console.log(this.name)
}


const obj = {
    name: 'ggg'
};

const obj2 = {
    name: 'hhh'
};


const fff = asd.bind(obj).bind(obj2);

fff();

