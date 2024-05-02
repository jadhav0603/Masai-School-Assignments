function getData(data) {
    return new Promise((resolve,reject)=>{
        if(typeof data !== 'number'){
            reject ("error")
        }
        else if(data % 2 !== 0)
        {
            setTimeout(function(){
                resolve ("odd")
            },2000)
        }
        else if(data % 2 == 0)
        {
            setTimeout(function(){
                resolve ("even")
            },4000)
        }

    })

}

export default getData
