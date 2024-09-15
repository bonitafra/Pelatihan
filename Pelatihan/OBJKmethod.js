const user = {
    nama: "Stefan",
    umur: 21
  };
  
  let objek = {
    namaProperti1: "nilaiProperti1", // Memberikan nilai ke namaProperti1
    namaProperti2: function() {       // Memberikan method ke namaProperti2
      return "Ini adalah method dari objek";
    }
  };
  
  let kalkulator = {
    namaOperasi: 'penjumlahan',
    jumlah: function(angka1, angka2) {
      return angka1 + angka2;
    }
  };
  
  const kucing = {
    jenis: "Persia",  // Menambahkan properti jenis ke objek kucing
    warna: "Putih",
    suara: function() { 
      return "Meong"; 
    }
  };
  
  const anjing = {
    ras: "Bulldog",   // Menambahkan properti ras ke objek anjing
    warna: "Coklat",
    suara: function() { 
      return "Gukguk"; 
    }
  };
  
  // Panggil method suara dari masing-masing objek
  console.log(kucing.suara()); // Output: Meong
  console.log(anjing.suara()); // Output: Gukguk