let i = 1,
    total = 10,
    beroperasi = 6;
    
// for(i; i <= n; i++){
//   if(i ===0 || i === n ){
//     for(j = 0; j < n; j++){
//       s += ('*')
//     }
//   }else{
//     for(j = 0; j <= n; j++){
//       if(j === 0 || j === n-1 ){
//         s+= ('*')
//       }else{
//         s+= (' ')
//       }
//     }
//   }
//   s+=('\n')
//   }

// for(i; i < n; i++){
//     for(j= 0; j <= i; j++){
//       s+=('*')
//     }
//   s+=('\n')
// } 

// for(i; i < n; i++){
//   for(j= n; j > i; j--){
//     s+=('*')
//   }
// s+=('\n')
// }

// for(i; i < n; i++){
//   for(j = n; j > i; j--){
//     s+= (' ')
//   }
//   for(k = 0; k <= i; k++){
//     s+= ('*')
//   }
  
//   s+= ('\n')
// }

// for(i; i < n; i++){
//   for(j = 0; j < i; j ++){
//     s+= (' ')
//   }
//   for(k = n; k > i; k--){
//     s+= ('*')
//   }
//   s+=('\n')
// }

// for(i; i < n; i++){
//   for(j = n-1; j > i; j--){
//     s+= (' ')
//   }
//   for(k = 0; k <= i; k++){
//     s+= ('*')
//   }
//   for(m = 0; m < i; m ++){
//     s+= ('*')
//   }
//   s+= ('\n')
// }

// for(i; i < n; i++){
//   for(j = 0; j < i; j++){
//     s+= (' ')
//   }
//   for(k = n; k > i; k--){
//     s+= ('*')
//   }
//   for(m = n-1; m > i; m--){
//     s+= ('*')
//   }
//   s+= ('\n')
// }

// console.log(s);


for(i; i <= total; i++){
  if (i < 6 && i != 5){
    console.log('Angkot No. ' + i + 'sedang beroperasi');
  } else if (i === 8 || i === 10 || i === 5){
    console.log ('Angkot No. ' + i +'sedang lembur');
  }
  else {
  console.log('Angkot No. ' + i +'sedang rusak');
  }
}
