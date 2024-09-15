// operator == (lost equality)

let bilangan = 10;

console.log(bilangan == 10); // output true karena bilangannyabmemang 10
console.log(bilangan == 8); // output false karena bilangnnya harusnya 10 bukan 8
console.log(bilangan == "10"); // output true 


// operator!=
let bilangan1 = 10;
console.log(bilangan1 != 8); //output true karena nilai dan tipe data sama
console.log(bilangan1 != "8"); // output true nilai dan tipe data tidak sama
console.log(bilangan1 != 10); //output false karena nilai da tipe data tidak sama
console.log(bilangan1 != "10" ); // ouytput fale nilai sama tapi tipe data beda

//operator !==
let bilangan2 = 10;
console.log(bilangan2 !== 8); //output true nilai tidak sama tapi tipe data tidak sama
console.log(bilangan2 !== "8"); //outpute true nilai dan tipe data tidak sama 
console.log(bilangan2 !== 10); //output false karena nilai dan tipe data sama 
console.log(bilangan2 !== "10"); //output true karena nilai sama tetapi tipe data beda

// operator > lebih dari 
let bilangan3 = 10;
console.log(biangan3 >10); //output false
console.log(bilangan3>11); // output true 
console.log(bilangan3> 8);//output true karena lbih besar dari 10

//operator < kurang dari
let bilangan4 = 10;
console.log(bilangan4<10); // outout false 
console.log(bilangan4< 8); //output false
console.log(bilangan4>11); //output true 

//operator >= lebih dari atau sama dengan
let blangan5 = 10;
console.log(bilangan5>=10); //true
console.log(bilangan5>=8);//true
console.log(bilangan5>=11); //false

//opeartor <= kurang dari atau sama dengan
let bilangan6 = 10;
console.log(bilangan6 <=10); //true
console.log(bilangan6 <=8);//true
console.log(bilangan6<=11);//false