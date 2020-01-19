function highestScore (students) {
var kelas = [];
var hasil = {};
if (students.length === 0) {
console.log('');
return hasil;
}
for (let a = 0; a < students.length; a++) {
var kelasAwal = students[a].class;
if (kelas.includes(kelasAwal)) {
continue;
} else {
kelas.push(kelasAwal);
}
}
for (let i = 0; i < kelas.length; i++) {
var objStudents = {};
var highest = 0;
for (let j = 0; j < students.length; j++) {
if (kelas[i] === students[j].class && students[j].score > highest) {
highest = students[j].score;
objStudents.name = students[j].name;
objStudents.score = students[j].score;
}
hasil[kelas[i]] = objStudents;
}
}
console.log('');
return hasil;
}

  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}