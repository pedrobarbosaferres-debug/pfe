import { useEffect,useState } from "react";

export default function contador(){
    const [contador, setContador] = useState(0);

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setContador(c => c+1);
        },3000)
        return () => clearInterval(intervalo);
    },[])// array vazio executa uma vez na montagem

    return(
        <h1>contador atualizado {contador} vez(es)</h1>
    )
}