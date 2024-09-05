namespace aaa {
   export const fff = () => {
        console.log(this); // this - window
    };

}

aaa.fff();
