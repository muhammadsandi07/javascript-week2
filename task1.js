function fetchData(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === true) {
        resolve('Data berhasil diambil')
      } else {
        const error = new Error('Gagal mengambil data')
        error.name = 'Error Fetch data'
        reject(error)
      }
    }, 3000)
  })
}

//  async await try catch

async function showData() {
  try {
    const status = true
    const data = await fetchData(status)
    if (data) console.log(data)
  } catch (error) {
    console.log(error)
  }
}
showData()

//  then() catch()
const statusData = true
fetchData(statusData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
