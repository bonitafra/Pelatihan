let orang = {
    nama: 'sarah',
    umur: 24,
    pekerjaan: 'programmer'
  };
  
  delete orang.umur;
  delete orang['pekerjaan'];
  
  console.log(orang); // Output: { nama: "sarah" }