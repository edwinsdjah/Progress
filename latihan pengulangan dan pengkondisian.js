let i = 0,
  n = 10,
  s = '';
d = '';


// // console.log('SEGITIGA 1')
// // for(i; i < n; i ++){
// //   for(j = 0; j <= i; j++){
// //     s+= ('*');
// //   }
// //   s+=('\n')
// // }

// // console.log(s);


// // console.log('SEGITIGA 2')
// // for(i; i < n; i ++){
// //   for(j = n; j > i; j--){
// //     s+= ('*')
// //   }
// //   s+=('\n')
// // }

// // console.log(s);


// // console.log('SEGITIGA 3')
// // for(i; i < n; i ++){
// //   for(j = n-1; j > i; j--){
// //     s+= (' ');
// //   }
// //   for(k = 0; k <= i; k ++){
// //     s+= ('*');
// //   }
// //   s+=('\n');
// // }

// // console.log(s);


// // console.log('SEGITIGA 4')
// // for(i; i < n; i ++){
// //   for(j = n - 1 ; j > i; j--){
// //     s+=(' ');
// //   }

// //   for(k = 0; k <= i; k++){
// //     s+=('*')
// //   }

// //   for(m = 0; m < i; m ++){
// //     s+=('*')
// //   }


// //   s+=('\n');
// // }

// // console.log(s);

// // console.log('SEGITIGA 5')
// // for(i; i < n; i ++){
// //   for(j = 0; j < i ; j ++){
// //     s+= (' ');
// //   }
// //   for(k = n; k > i; k --){
// //     s+= ('*');
// //   }
// //   for(m= n-1; m > i; m--){
// //     s+= ('*');

// //   }


// //   s+=('\n');
// // }

// // console.log(s);


// // console.log('KOTAK KOSONG')
// // for(i; i < n; i ++){
// //   for (j = 0; j < n; j++){
// //     if(i === 0 || i === n-1){
// //       s+=('*');
// //     }else{
// //       if (j === 0 || j === n-1){
// //       s+= ('*')
// //       }else{
// //         s+= (' ')
// //       }
// //     }
// //   }
// //   s+= ('\n');
// //   }
// // console.log(s);


// // console.log('SEGITIGA 4')
// // for(i; i < n; i ++){
// //   if(i === 0){


// //   }

// //   for(j = n -1; j > i; j--){
// //     s+= (' ')
// //   }
// //   for(k = 0; k <= i; k++)[
// //     s+= ('*')
// //   ]
// //   for(m = 0; m < i; m++){
// //     s+= ('*')
// //   }

// //   s+= ('\n');
// // }

// // console.log(s);


// console.log('SEGITIGA 4')
// for(i; i < n; i ++){
//   for(j = 0; j < i; j++){
//     s+=(' ');
//   }
//   for(k= n; k > i; k--){
//     s+=('*');
//   }
//   for(m = n-1; m > i; m--){
//     s+= ('*');
//   }

//    s+= ('\n')
// }
// console.log(s);

// console.log('PAPAN CATUR')

// for(i; i < n ; i++){
//   if(i <  n / 2 - 1){
//     for(j = n-1; j > i; j --){
//       s+=(' ')
//    }
//    for(k = 0; k <= i; k++){
//       s+= ('*')
//    }
//    for(m = 0; m < i; m++){
//       s+= ('*')
//     }  
//   } else {
//   for(j = 0; j <= i; j++){
//     s+= (' ')
//   }
//   for(k = n-2; k >= i; k--){
//     s+= ('*')
//   }
//   for(m = n-2; m > i; m--){
//     s+=('*')
//   } 
// }
//   s+= ('\n')
// }
// console.log(s);

function segitigaSiku(i, n) {
  for (i; i <= n; i++) {
    for (j = 0; j < i; j++) {
      s += ('*')
    }
    s += ('\n')
  }
  return console.log(s);
}

function segitiga(n) {
  for (let i = 1; i < n; i++) {
    for (j = 0; j < i; j++) {
      s += (j)
    }
    s += ('\n')
  }

  return console.log(s);
}


function segitigaSikuBalik() {
  for (i; i < n; i++) {
    for (j = n; j > i; j--) {
      s += (' ')
    }
    for (k = 0; k <= i; k++) {
      s += ('*')
    }
    s += ('\n')
  }
  console.log(s);
}

function segitigaSikuBalik2(n) {
  for (i; i < n; i++) {
    for (j = 0; j < i; j++) {
      s += (' ')
    }
    for (k = n; k > i; k--) {
      s += ('*')
    }
    s += ('\n')
  }
  return console.log(s);
}

function kotakBolong(n) {
  for (i; i <= n; i++) {
    if (i == 0 || i == n) {
      for (j = 0; j <= n; j++) {
        s += ('*')
      }
    } else {
      for (j = 0; j <= n; j++) {
        if (j == 0 || j == n) {
          s += ('*')
        } else {
          s += (' ')
        }
      }
    }
    s += ('\n')
  }
  return console.log(s);
}



function segitigaSamaKaki(n) {
  for (i; i < n; i++) {
    s += ("*")
  }


  return console.log(s);

}


function segitigaSamaKakiBalik(n) {
  for (i; i < n; i++) {
    for (j = 0; j <= i; j++) {
      s += (' ')
    }
    for (k = n - 1; k >= i; k--) {
      s += ('*')
    }
    for (m = n - 1; m > i; m--) {
      s += ('*')
    }
    s += ('\n')
  }

  return console.log(s);
}


function stringTemplate() {
  const nama = "Edwin Syah"
  lulus = 70;
  nilai = 80;
  hasil = ""

  if (nilai >= lulus) {
    hasil = "lulus"
  } else {
    hasil = "tidak lulus"
  };

  const template = `Nama saya adalah ${nama}, dan saya dinyatakan ${hasil}`;

  console.log(template);
}

function genapGanjil(n) {
  let hasil = "";

  (n % 2 === 0) ? hasil = "genap": hasil = "ganjil";

  const template = `Angka berikut adalah angka ${n} dan itu merupakan bilangan ${hasil}`
  console.log(template);
}

function Angkaot(jumlah) {
  let i = 1;
  text = "";
  s = "";
  for (i; i <= jumlah; i++) {
    text += (`Angkot yang beroperasi sebanyak ${i} unit\n`);
  }

  console.log(text);
}

function tesArray() {

  let array1 = [];
  array2 = ["Aku", "ini", "Array", "kedua"];
  array3 = ["Aku", "ini", "Array", "ketiga"]

  array1.push("Aku", "ini", "Array", "pertama");

  array1.push(array2)
  array2.push(array3)

  array1[4]

  console.log(array1[4])
}

function tesObject() {

  let informasi = {
    Nama: "Edwin Syah",
    Alamat: "Jakarta",
    Umur: 20
  }

  console.log(`Alamat : ${informasi.Alamat}`);
}

function tambah() {
  let hasil = "0"
  for (let i = 0; i < arguments.length; i++) {
    hasil + arguments[i];
  }
  return hasil;
}

function cekExpression(n) {
  let nilai = n
  hasil = ""
  grade = ""

  if (nilai > 85) {
    hasil = "lulus";
    grade = "A";
  } else if (nilai > 70 && nilai <= 85) {
    hasil = "lulus";
    grade = "B"
  } else if (nilai > 60 && nilai <= 70) {
    hasil = "lulus";
    grade = "C"
  } else {
    hasil = "tidak lulus";
    grade = ""
  }
  console.log(`Berikut adalah hasil belajarmu, nilaimu adalah ${nilai} kamu dinyatakan ${hasil}, dengan grade ${grade}`)
  return
}

cekExpression(86);