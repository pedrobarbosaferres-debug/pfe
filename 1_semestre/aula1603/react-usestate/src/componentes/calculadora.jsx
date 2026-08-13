import { useState } from "react";

export default function Calculadora({titulo}){
    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[resultado,setResultado]=useState(0);

    function somar(e) {
        e.preventDefault();
        setResultado(Number(num1) + Number(num2));
    }

    function subtrair(e) {
        e.preventDefault();
        setResultado(Number(num1) - Number(num2));
    }

    function multiplicar(e) {
        e.preventDefault();
        setResultado(Number(num1) * Number(num2));
    }

    function dividir(e) {
        e.preventDefault();
        if (Number(num2) === 0) {
            setResultado('Erro: divisão por zero');
        } else {
            setResultado(Number(num1) / Number(num2));
        }
    }

    function raizQuadrada(e) {
        e.preventDefault();
        if (Number(num1) < 0) {
            setResultado('Erro: raiz de número negativo');
        } else {
            setResultado(Math.sqrt(Number(num1)));
        }
    }

    function potenciacao(e) {
        e.preventDefault();
        setResultado(Math.pow(Number(num1), Number(num2)));
    }

    const isErro = typeof resultado === 'string' && resultado.startsWith('Erro');
    return (
        <div className="calculadora-container">
            <h1>{titulo}</h1>
            <form action="">
                <label htmlFor="numero1">Número 1</label>
                <input id="numero1" type="number" placeholder="0" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <label htmlFor="numero2">Número 2</label>
                <input id="numero2" type="number" placeholder="0" value={num2} onChange={(e) => setNum2(e.target.value)} />
                <div className="botoes">
                    <button onClick={somar}>Somar</button>
                    <button onClick={subtrair}>Subtrair</button>
                    <button onClick={multiplicar}>Multiplicar</button>
                    <button onClick={dividir}>Dividir</button>
                    <button onClick={raizQuadrada}>Raiz Quadrada</button>
                    <button onClick={potenciacao}>Potenciação</button>
                </div>
                <div className={isErro ? 'erro' : 'resultado'}>
                    resultado: {resultado}
                </div>
            </form>
        </div>
    )
}
