// No.1
function shoutOut(){
return "hallo function"
}
var tampung = shoutOut();
console.log (tampung);

//nomor 2
function calculateMultiply(numb1,numb2){
    return numb1*numb2
}
var numb1 = 5;
var numb2 = 6;
var hasilperkalian= calculateMultiply(numb1, numb2);
console.log(hasilperkalian);

// nomor 3
function processSentence(){
    return "Nama saya"+' '+this.name +' '+"umur saya"+' '+ this.age+' '+ "tahun, alamat saya di"+' '+this.address+' ' + "dan saya punya hobby yaitu"+ ' '+ this.hobby
    }        
nama = "Agus";
age = "30";
address = "Jln. Malioboro, Yogjakarta";
hobby = "gaming";

var fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence);
