function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
const biaya = 2000;
var hasil = [];
if (arrpenumpang.length === 0) {
return arrpenumpang;
}
for (let i = 0; i < arrpenumpang.length; i++) {
var penumpang = arrpenumpang[i];
var objpenumpang = {};
      
objpenumpang.penumpang = penumpang[0];
objpenumpang.naikDari = penumpang[1];
objpenumpang.tujuan = penumpang[2];
objpenumpang.bayar = biaya * (rute.indexOf(objpenumpang.tujuan) - rute.indexOf(objpenumpang.naikDari));
      
hasil.push(objpenumpang);
}
return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]