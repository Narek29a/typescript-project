 function resolveProm(value, timeout) {
     return new Promise(resolve => {
         setTimeout(() => {
             resolve(value)
         },timeout)
     })
}

resolveProm('asd',500).then(result => {console.log(result)});
