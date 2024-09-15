// di dalam elemen apa sajakah kita bisa meletakkan element <script> didalam file html
// jawaban head dan body

// lengkapilah element script beriut agar bisa mengenali file eksternal script.js 
{/* <script = "script.js"></script> */}
// jawaban src & script 

// deklarasikkan variabel animal dengan kyword let dan lalu diakhiri dengan titik koma
const animal="kucing";

// mambuat tipe data string pada nama dan integer pada umur

let nama="bonita";
let umur=20;

// Tampilkan pada console, nilai varibel const schoolName = "SMK Negeri 1";
console.log("SMK Negeri 1");

// lengkapilah varibel penjmlahan dengan menggunakkan operator + dan hasil operasi penjumlahan harus 15
const penjumlahan = "10+5";
console.log("pemjumlahan");

// lengkapilah varibel modulus  dengan menggunakkan operator % dan variabel penjumlahan (contoh const modulus  =penjumlahan ) hasil modulus harus bernilai 3
const modulus = "pemjumlahan%4";
console.log("modulus");

// lengkapilah varibel pangkat dengan menggunakkan operator ** dan hasil variabel modulus (contoh const pangkat =modulus** ) hasil pangkat harus bernilai 27
const pangkat = "modulus**3";
console.log("pangkat");

// tambah 5 ke variabel umur dengan menggunakkan operator +=
let umurSaya=10;
umurSaya +=5;
console.log("umurSaya");

// oprtstring buatlah kalimat hello world dengan ketentuan+=
let kalimat ="Hello";
kalimat+="world";
console.log(kalimat); //output hello world

// isilah titik titik dibawah ini dengan operator perbandingan yang benar!
let x=3;
let comprason = x == 3;
console.log("comprason");

//lengkapilah
let number1 ='2';
let number2 = '3';
let findTheLogic = number1==2||number2=='3';

// istilah yang digunakkan untuk mnyebut input pada suatu fungsi adalah "PARAMETER"

// buat fungsi nama saya namun terbalik
function namaSaya(){
    return "alex";
}
console.log(namaSaya()); //output Alex

//buat sebuah fungsi bernama luas persegi yang menerima parameter s yang mengembalikan  luas persegi  catatan s adalah sisi dari sebuah persegi
function luasPersegi (s){

    return s*s;
}
console.log(luasPersegi(4)); //output 16

//global local
let carName = 'Kijang';
function displayCarName() {
  let carName = 'Honda';

  return 'Mobil ini bermerk ' + carName;
}
console.log(displayCarName()); // Output: ...

// buat sebuah onjek dengan nama saya
// beri properti nama dan isi denan nama amu, tipe datanya harus string
// beri properti umur dan isi dengan umur kamu, tipe datanya harus number
const saya= {
    nama:"bobon",//tipe data string
    // umur: 25 tipe data number
};
console.log(saya);
let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
  };
  delete orang.umur;
  delete orang['pekerjaan'];
  console.log(orang); // Output: { nama: "sarah" }

// tmbhkn method suara ke objek kucing dengan return string meong
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function() {  // Menambahkan method suara
      return "Meong";
    }
  };
  
  // Panggil method suara dari objek kucing
  console.log(kucing.suara()); // Output: Meong

//  aaray bisa menampung lebih dari satu data, dengn tipe data yang seragam

// buat aaray dengan hewan lalu isi dengan nama nama hewan yang kmu sukai
let hewan = ['orca','kucing', 'kelinci'];

// objek math
// 1. Ubah bilangan sehingga hasil operasi pow adalah angka integer
let base = 2;
let exponent = 3; // Menghasilkan 2^3 = 8
console.log(Math.pow(base, exponent)); // Output: 8

// 2. Ubah bilangan sehingga hasil operasi sqrt adalah angka integer
let value = 16; // Menghasilkan sqrt(16) = 4
console.log(Math.sqrt(value)); // Output: 4

// 3. Ubah bilangan sehingga hasil operasi max adalah angka integer
let a = 5;
let b = 10;
let c = 3;
console.log(Math.max(a, b, c)); // Output: 10

// soal looping
let angka = []; // Inisialisasi array kosong untuk menyimpan nilai
let i = 5;      // Mulai dari nilai 5

do {
  angka.push(i);  // Masukkan nilai i ke dalam array angka
  i++;            // Increment nilai i
} while (i <= 10); // Loop akan berhenti jika i lebih dari 10

// Setelah loop selesai, i akan bernilai 11
console.log(angka); // Output: [5, 6, 7, 8, 9, 10]
console.log(i);     // Output: 11
  