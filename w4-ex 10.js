function changeMe(arr) {
var nama;
var year = (new Date()).getFullYear();
    
for (let i = 0; i < arr.length; i++) {
var objek = {};
      
objek.firstName = arr[i][0];
objek.lastName = arr[i][1];
objek.gender = arr[i][2];
    
if (year > arr[i][3]) {
 objek.age = year - arr[i][3];
} else {
objek.age = 'Invalid Birth Year';
}
      
nama = (i+1) + '. ' + objek.firstName + ' ' + objek.lastName + ':\n';
      
console.log(nama, objek);
}
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""