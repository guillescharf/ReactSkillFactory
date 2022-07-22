const string = "Hello World";
const numberAsString = "123.345";

const stringToNumber = Number(string);
console.log("Parse string to number: ", stringToNumber);  //No deberia poder

const toNumber = Number(numberAsString);
console.log("Parse Number: ", toNumber); // Deberia poder

const parseToNumber = parseInt(numberAsString);
console.log("Parse number with parseInt:", parseToNumber);

const parseFloat2 = parseFloat(numberAsString);
console.log("PArse number with parseFloat:", parseFloat2);


//Redondeando a 2 decimales
const redondeado = Math.ceil(numberAsString);
console.log("Parseo de redondeo: ", redondeado);