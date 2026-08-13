const prompt = require('prompt-sync')();

let n1=Number(prompt("digite um valor"));
let n2=Number(prompt("digite outro"));

if(n1==0&&n2==0){console.log("ambos enguais a 0")}
else if(n1==n2){console.log("são enguais a "+n1)}
else if(n1>n2){console.log(n1+"é maior que "+n2)}