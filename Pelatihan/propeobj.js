// Contoh objek dengan nilai properti yang benar
let objek = {
    namaProperti: 'nilaiProperti'
};

// Dot Notation
console.log(objek.namaProperti); // Output: nilaiProperti

// Objek dengan beberapa properti
let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
};

console.log(orang.nama);       // Output: "sarah"
console.log(orang.umur);       // Output: 24
console.log(orang.pekerjaan);  // Output: "programmer"

// Contoh objek dengan properti yang benar
let objek1 = {
    namaProperti: 'nilaiProperti'
};

// Bracket Notation
console.log(objek1["namaProperti"]); // Output: nilaiProperti
console.log(objek1['namaProperti']); // Output: nilaiProperti

// Objek dengan properti dinamis
let namaVariabel = 'namaProperti';

let objek3 = {
    [namaVariabel]: 'nilaiProperti'
};

// Mengakses properti objek secara dinamis
console.log(objek3[namaVariabel]); // Output: nilaiProperti

// Objek smartphone
const smartphone = {
    kamera: "10MP",
    memori: "128GB"
};

const fitur = "kamera";

console.log(smartphone[fitur]);   // Output: 10MP
console.log(smartphone["kamera"]); // Output: 10MP
console.log(smartphone.kamera);   // Output: 10MP