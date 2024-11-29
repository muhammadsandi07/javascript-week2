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
                return resolve(data)
            }else{
                return reject(new Error("data tidak tersedia"))
            }
        }, 3000);
    })
}

getAllData().then((value) => console.log(value)).catch((err) => console.log(err))

const  filterValue = async () =>{

}

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