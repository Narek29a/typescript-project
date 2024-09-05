function fff() {
    const obj = {
        i: 10,
        fff() {
            console.log(this)
        },
        xxx: {
            asd: () => {
                console.log(this) // window
            },
        }
    };
    obj.xxx.asd()
}


fff.call({pupu:54545});


class SomeClass {
    constructor() {
        this.name = 'vvv';
    }

    fff = () => {
        console.log(this) // this - someClass
    }

    printNameArrowFunction() {
        console.log(this);
        setTimeout(() => {
            console.log(this) // this - someClass
        });
    }

    printNameFunction() {

        (() => {
            console.log('iif', this)
        })()

    }
}

