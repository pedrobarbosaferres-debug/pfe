const prompt = require('prompt-sync')();
let preco=Number(prompt("digite o preço do produto: R$"))
let cupom=prompt("digite o cupom (opcional):")
let BRONZE=(preco/100)*5
let PRATA=(preco/100)*10
let OURO=(preco/100)*15
if(cupom=="BRONZE"){console.log("USADO!! valor é "+preco-BRONZE)}else
if(cupom=="PRATA"){console.log("USADO!! valor é"+preco-PRATA)}else
if(cupom=="OURO"){console.log("USADO!! valor é"+preco-OURO)}else
console.log("sem cupom")