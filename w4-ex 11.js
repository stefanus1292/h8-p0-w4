function shoppingTime(memberId, money) {
let indexBarang = 0;
var shop = {
memberId: memberId,
money: money,
listPurchased: [],
changeMoney: 0
};
var listbarang = [
['Sepatu Stacattu', 1500000],
['Baju Zoro', 500000],
['Baju H&N', 250000],
['Sweater Uniklooh', 175000],
['Casing Handphone', 50000]
];
    
if (memberid === '' || money === undefined) {
console.log('');
console.log('Mohon maaf, toko X hanya berlaku untuk member saja');
return '';
} else if (money <= 50000) {
console.log('');
console.log('Mohon maaf, uang tidak cukup');
return '';
}
for (let i = 0; i < listbarang.length; i++) {
change = money - listbarang[i][1];
if (change >= 0) {
shop.listpurchased.push(listbarang[i][0]);
shop.changemoney = change;
money = change;
}
}
    
console.log('');
return shop;
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja