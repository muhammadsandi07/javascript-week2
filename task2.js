function getDataFromServer(status, callback){
    setTimeout(() => {
        if(status){
            callback(['product1','product2', 'product3'], null)
        }else{
            const err = new Error('failed to fetch data')
            err.name = 'Error'
            callback(null,err)
        }
    }, 3000);
}


function processData (data,error) {
    try {
        if(data){
           console.log( data)
        }else{
            throw error
        }
    } catch (error) {
        console.log(error);
    }
}


getDataFromServer(true, processData)