//alert('Eu estou aprendendo o DOM e sou um bom aluno')
//alert('Eu estou aprendendo o DOM e meu professor é top')
let fundo = document.getElementById('corpo')
// let fundo = document.getElementsByTagName('corpo')
let fundoPagina = document.querySelector('#corpo')//id selector
//document.querySelector('.corpo')//class selector
const titulo=document.querySelector('.titulo');
const paragrafo1=document.querySelector('.paragrafo1')

fundo.style.fontFamily='Arial';

titulo.textContent+='-Pedro Barbosa';
paragrafo1.textContent+=' vamos aprender mais sobre o DOM';
fundo.style.backgroundColor = '#0033ff';
titulo.style.color='#ffffff';
paragrafo1.style.color='#e4dbdb';
paragrafo1.fontFamily='Arial';