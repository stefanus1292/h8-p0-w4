function checkAB(num) {
var A, B;
  
for (let i = 0; i < num.length; i++) {
if (num[i] === 'a') {
A = i;
} else if (num[i] === 'b') {
B = i;
}
      
var jarak = Math.abs(B - A) - 1;
}
    
if (jarak === 3) {
return true;
} else {
return false;
}
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false