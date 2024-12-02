const data = [
    {
        id: 1,
        username: 'susilo123',
        pasword: '123susilo',
        name: "susilo",
        prodi:"Informatika",
        nilai: {
            bahasaIndonesia: 76,
            fisika : 85,
            strukturData: 90,
            androidDasar: 80,
            keamananJaringan: 80
        }, 
        lulus: false
    },
    {
        id: 2,
        username: 'yudoBahagia1',
        pasword: 'yudo123',
        name: "yudo",
        prodi:"Informatika",
        nilai: {
            bahasaIndonesia: 80,
            fisika : 76,
            strukturData: 76,
            androidDasar: 80,
            keamananJaringan: 90
        },
        lulus: false
    },
    {
        id: 3,
        username: 'dodo123',
        pasword: 'dodo12345',
        name: "dodo",
        prodi:"Informatika",
        nilai: {
            bahasaIndonesia: 80,
            fisika : 50,
            strukturData: 76,
            androidDasar: 50,
            keamananJaringan: 80
        },
        lulus: false
    }
]


const getAllData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(data.length != 0) {
                 resolve(data)
            }else{
                 reject(new Error("data tidak tersedia"))
            }
        }, 3000);
    })
}

// getAllData().then((value) => console.log(value)).catch((err) => console.log(err))

const  filterValue = async () =>{
    try {
        let totalNilai =0
        const response = await getAllData()
        const filtered = []
        let lulus = false
        
        if(response){
            for(let i = 0; i < response.length; i++){
                for(const mataKuliah in response[i].nilai){
                    totalNilai += response[i].nilai[mataKuliah]
                }
              
                lulus = (totalNilai / Object.keys(response[i].nilai).length) >= 75 ? true : false
                response[i] = {...response[i], lulus}
                totalNilai = 0
                if(response[i].lulus){
                  filtered.push(response[i])
                }
            }
            
            return filtered
        } else{
            throw Error("Nilai tidak tersedia")
        }
       
        
    } catch (error) {
        console.log(error);
    }
}

filterValue()

// 

const nilai = [80,90,73,87,45]

const getAverage = (nilai) =>{
    return new Promise((resolve, reject) =>{
        let average = 0
        if(!nilai){
            reject(new Error("nilai anda tidak tersedia"))
        } else{
             nilai.forEach((item) =>{
             average += item

        })   
        resolve(average / nilai.length)
        }
            
    })
}

 getAverage(nilai).then((average) => average > 80? console.log("Selamat anda lulus") :  console.log("Maaf anda belum lulus") ).catch((error)=> console.log(error) )

const getAverageAsyn = async (nilai) =>{
    try {
        const average = await getAverage(nilai)
        if(average > 80){
            return "Selamat anda lulus"
        }else{
            return "Maaf anda belum lulus"
        }
    } catch (error) {
        console.log(error);
    }
}




// fetch data
const URL = "https://jsonplaceholder.typicode.com/users"
const fetchData = async (url) => {
    try {
        const name = []
        const response  = await fetch(url)
        const data = await response.json()
        data.forEach(element => {
            name.push(element.name)
        });
        console.log(name)
    } catch (error) {
        console.log(error);
    }
}

fetchData(URL)