const prompt = require('prompt-sync')();

let idade=Number(prompt("digite sua idade "));

if(idade<12){console.log("criança")}
else if(idade>=12&&idade<18){console.log("adolecente")}
else if(idade>=18&&idade<60){console.log("adulto")}
else if(idade>=60){console.log("idoso")}