let data = [
  { nama: "Keyboard", harga: 200000, qty: 2 },
  { nama: "Mouse", harga: 100000, qty: 3 },
  { nama: "Monitor", harga: 1500000, qty: 1 },
];

function hitungTransaksi(transaksi){
    // let totalTransaksi = 0
    // for(let i = 0; i<transaksi.length; i++){
    //     console.log('sebelum ditambah', totalTransaksi)
    //     totalTransaksi += transaksi[i].harga * transaksi[i].qty
    //     console.log(`loop ke ${i + 1}, total sekarang = ${totalTransaksi}`)
    // }

    console.log(transaksi.map((val) => {
        console.log(val.harga)
    }))

    // return totalTransaksi
}

console.log(hitungTransaksi(data))