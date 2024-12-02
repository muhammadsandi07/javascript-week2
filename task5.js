const fazzFood = (harga, voucher, jarak, pajak) => {
  const discount = getDiscount(voucher, harga)
  const shippingPrice = getShippingPrice(jarak)
  const tax = getTax(pajak, harga)
  const subTotal = harga + tax + shippingPrice - discount
  return {
    harga: harga,
    potongan: discount,
    'biaya Antar': shippingPrice,
    pajak,
    tax,
    subTotal: subTotal,
  }
}

const getDiscount = (voucher, pemesanan) => {
  let discount = 0
  let totalDiscount = 0
  if (voucher == 'FAZZFOOD50' && pemesanan >= 50_000) {
    discount = 0.5
    totalDiscount =
      pemesanan * discount <= 50_000 ? pemesanan * discount : 50_000
    return totalDiscount
  } else if (voucher == 'DITRAKTIR60' && pemesanan >= 25_000) {
    discount = 0.6
    totalDiscount =
      pemesanan * discount <= 30_000 ? pemesanan * discount : 30_000
    return totalDiscount
  } else {
    return (totalDiscount = 0)
  }
}

const getShippingPrice = (jarak) => {
  let jarakPertama = 2
  let hargaJarakPertama = 5_000
  let hargaPengiriman = 0
  let hargaJarakSelanjutnya = 3_000
  if (jarak <= jarakPertama) {
    hargaPengiriman = hargaJarakPertama
    return hargaPengiriman
  } else {
    hargaPengiriman =
      (jarak - jarakPertama) * hargaJarakSelanjutnya + hargaJarakPertama
    return hargaPengiriman
  }
}

const getTax = (isPajak, harga) => {
  let pajak = isPajak ? 0.05 : 0
  const totalPajak = isPajak ? harga * pajak : 0
  return totalPajak
}

console.log(fazzFood(75000, 'FAZZFOOD50', 5, true))
