//alert('Eu estou aprendendo o DOM e sou um bom aluno')
//alert('Eu estou aprendendo o DOM e meu professor é top')
let fundo = document.getElementById('corpo')
// let fundo = document.getElementsByTagName('corpo')
let fundoPagina = document.querySelector('#corpo')//id selector
//document.querySelector('.corpo')//class selector
const titulo=document.querySelector('.titulo');

fundo.style.backgroundColor = '#405ffa';
titulo.style.color='#fff';
titulo.style.fontSize='9$F8px';
titulo.textContent+='-Fabio jr';