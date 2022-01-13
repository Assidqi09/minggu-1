var tanggal= 9;
var bulan =1;
var tahun=2022;

if (tanggal <0 || tanggal>31){
    tanggal='';
}

switch(bulan){ 
        case 1:
        bulan='januari'
        break;
        case 2:
        bulan='februari'
        break;
        case 3:
        bulan='april'
        break;
        case 4:
        bulan='mai'
        break;
        case 5:
        bulan='juni'
        break;
        case 6:
        bulan='juli'
        break;
        case 7:
        bulan='agustus'
        break;
        case 8:
        bulan='september'
        break;
        case 9:
        bulan='oktober'
        break;
        case 10:
        bulan='januari'
        break;
        case 11:
        bulan='november'
        break;
        case 12:
        bulan='desember'
        break;
    default: bulan=''
}
if(tahun<1990 || tahun >2200){
    tahun='';
}
console.log(tanggal+' '+bulan+' '+tahun);

