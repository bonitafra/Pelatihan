let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 ===6 && bilangan2 ===4); // output true
console.log(bilangan1 ===6 && bilangan2 <4); //output false
console.log(bilangan1 <6 && bilangan2 ===4); // output false 
console.log(bilangan1 <6 && bilangan2 < 4); //output false 

console.log(bilangan1 ===6 || bilangan2 ===4); //output true
console.log(bilangan1 ===6 || bilangan1 <4); //output true
console.log(bilangan1 < 6 || bilangan2 ===4);//output true
console.log(bilangan1 <6 || bilangan2 <4); //output false  

console.log(!true); // false
console.log(!false); //true