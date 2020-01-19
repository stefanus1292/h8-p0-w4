function ubahHuruf(kata) {
var huruf = 'abcdefghijklmnopqrstuvwxyz';
var hasil = [];
var indexhuruf;
    
for (let i = 0; i < kata.length; i++) {
indexhuruf = huruf.indexOf(kata[i]) + 1;
hasil.push(huruf[indexhuruf]);
}
    
return hasil.join('');
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu