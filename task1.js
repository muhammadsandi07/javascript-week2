function fetchData(status){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(status === true){
                resolve('Data berhasil diambil')
            }else{
                reject('Gagal mengambil data')
            }
        }, 3000);
    })
}

const status = false

// handling using then() catch()
fetchData(status).then((res) => console.log(res)).catch((err) => console.log(err))

// handling using try catch

const showData = async (status) =>{
    try {
        const data = await fetchData(status)
        if(data) console.log(data);
    } catch (error) {
       console.log(error);
    }
}


showData()