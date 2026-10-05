import {useState} from "react";

export default function UseState({titulo}){
    const [nome, setnome]=useState('acarajé');
    const [idade,setIdade]=useState(17);
    const[ra,setRa]=useState(455322);
    const [bolsa,setBolsa]=useState(500);
    
    return(
        <>
    <h1>{titulo}</h1>
    <h3>Nome do aluno:{nome}</h3>
    <h4>Idade:{idade}</h4>
    <h4>RA:{ra}</h4>
    <h4>bolsa{bolsa} reais</h4>
    </>
)
}