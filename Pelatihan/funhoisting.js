console.log(operasiPerkalian(5, 5)); //output 25

function operasiPerkalian(angka1, angka2){
    return angka1*angka2;
}

console.log(operasiPerkalian(5,5)); //output uncaught reference eror: 

const operasiPerkalian = function(angka1, angka2){
    return angka1*angka2;
}