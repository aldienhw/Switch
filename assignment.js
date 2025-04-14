let hargaawal = 500000;
let diskonpersen = 20;
let potonganharga = hargaawal;potonganharga*=diskonpersen/100;
let hargasetelahdiskon = hargaawal;hargasetelahdiskon-=potonganharga;
console.log("harga awal=" + hargaawal)
console.log("diskon persen=" + '20%')
console.log("potongan harga=" + potonganharga)
console.log("harga setelah diskon=" + hargasetelahdiskon)