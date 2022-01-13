//1. Melakukan Looping Menggunakan While

// console.log('looping petama')
// var loop = 2 ;
// while(loop < 10){
//   console.log(loop + '  I love coding');
// loop++
// }
// console.log('looping kedua')
// while(loop >= 2){
//   console.log(loop + ' I will become fullstack developer');
// loop--
// }

//2. Melakukan Looping Menggunakan For

// console.log('LOOPING PERTAMA')
// for(var i = 0;  i <20; i++)
// {
//     console.log(i + ' I love coding');
// }
// console.log('LOOPING KEDUA')

// for(var j =20; j >0; j--){
//     console.log(j + ' I will become fullstack developer');

// }


for (let i = 0; i < 101; i++) {
  if (i % 2 == 0){
      console.log("bilangan genap" + " "  + i)
  } else {
    console.log( "bilangan ganjil " + " " + i)
  }
}


for (let i = 1; i < 101; i+=2) {
    if (i % 3 == 0){
        console.log("3 kelipatan 3 "  + i)
    } 
  }
  
  for (let i = 1; i < 101; i+=5) {
    if (i % 6 == 0){
        console.log("6 kelipatan 6 "  + i)
    } 
  }
  
  for (let i = 1; i < 101; i+=9) {
    if (i % 10 == 0){
        console.log("10 kelipatan 10 "  + i)
    } 
    
  }