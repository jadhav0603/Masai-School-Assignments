function job(delay, value) {
    return new Promise(function(resolve,reject){
        setTimeout(function(value){
            resolve(value);
        },delay)
    })
}

let promises = [job(1000,10),job(3000,20),job(500,30),job(1500,40)]
var results = []
Promise.all(promises)
.then(function(value){
    results.push(value);
})

export { job, results };
