//Contoh input 1
var nama = "Syechan";
var peran = "";
var tugas = "";
if (nama === "") {
  console.log("Nama Harus di Isi");
} else if (peran === "Kesatria") {
  var tugas = "kamu dapat menyerang dengan senjatamu!";
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log("Halo " + peran + " " + nama + " " + tugas);
} else if (peran === "Tabib") {
  var tugas = "kamu akan membantu temanmu yang terluka.";
  console.log("Selamat datang di Dunia Proxitia, " + nama);
  console.log("Halo " + peran + " " + nama + " " + tugas);
} else if (peran === "Penyihir") {
  var tugas = "ciptakan keajaiban yang membantu kemenanganmu!";
  console.log = "Selamat datang di Dunia Proxitia," + nama;
  console.log = "Halo" + peraan + " " + nama + " " + tugas;
} else {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}
