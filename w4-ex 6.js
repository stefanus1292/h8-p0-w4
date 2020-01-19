function digitPerkalianMinimum(angka) {
var hasilkali;
var angkafaktor;
var arrjumlahdigit = [];
for (let a = 1; a <= angka; a++) {
for (let b = 1; b <= angka; b++) {
hasilkali = a * b;
if (hasilkali === angka) {
angkafaktor = String(a) + String(b);
arrjumlahdigit.push(Number(angkafaktor));
}
}
}
arrjumlahdigit.sort(function(value1, value2) { return value1 > value2 });
return arrjumlahdigit[0].toString().length;
}

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2