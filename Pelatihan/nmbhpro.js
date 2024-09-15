// Menambahkan properti baru ke objek
let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
  };
  
  // Menambahkan properti baru
  orang.kebangsaan = 'warga negara indonesia';
  
  console.log(orang);
  /*
    Output:
    {
      nama: 'sarah',
      umur: 24,
      pekerjaan: 'programmer',
      kebangsaan: 'warga negara indonesia'
    }
  */
  
  // Menggunakan bracket notation untuk menambah properti baru
  let objek = { namaProperti1: 'nilaiProperti1' };
  
  // Menambahkan properti baru
  objek['namaProperti2'] = 'nilaiProperti2';
  
  console.log(objek);
  /*
    Output:
    {
      namaProperti1: 'nilaiProperti1',
      namaProperti2: 'nilaiProperti2'
    }
  */
  
  // Mengubah data properti dan menambah properti baru ke objek
  const objek2 = { namaProperti1: 'nilaiProperti1' };
  
  // Mengubah data properti
  objek2.namaProperti1 = 'nilaiProperti2'; // OK
  
  // Menambah properti baru ke objek
  objek2.namaProperti3 = 'nilaiProperti3'; // OK
  
  console.log(objek2);
  /*
    Output:
    {
      namaProperti1: 'nilaiProperti2',
      namaProperti3: 'nilaiProperti3'
    }
  */