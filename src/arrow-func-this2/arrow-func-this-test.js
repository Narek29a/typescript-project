var bunny = {
    www: null,
    asd: function () {
        (() => {
            console.log(this) // this - bunny
        })()
    }
};
const myObject = {
    www: null,
    myMethod:  ()=> {
        console.log(this)
        const ooo = {
            xxx: this, // this - myObject
            www: function () {
                console.log(this) // this - myObject
                const yyy = {
                    zzz: () => {
                        setTimeout(() => {
                            console.log(this, 'sd')
                        });
                    },
                }
                yyy.zzz();
            },
        }
        ooo.www();
    }
};
myObject.myMethod();

function exxxx() {
    [''].forEach(function(){
        console.log(this)
    },{ad:'asdasd'});
}

exxxx();
