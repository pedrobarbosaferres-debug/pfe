const prompt = require('prompt-sync')();
let idade = Number(prompt("ano em que você nasceu: "))
let date = new Date();
console.log(date.getFullYear()-idade);