'use client'
import { useState } from "react";
import Header from "../componentes/header";
import styles from "./buscaCep.module.css";

export default function BuscarCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);

    const search = async () => {
        const limpaCep = cep ? cep.replace(/\D/g, '') : '';
        if (limpaCep.length === 8) {
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${limpaCep}/json/`);
                const dados = await resposta.json();
                
                if (dados.erro) {
                    alert("CEP não encontrado!");
                    setEndereco(null);
                    return;
                }

                setEndereco(dados);
                console.log(dados);
            } catch (e) {
                console.error('não foi possivel acessar a api', e);
            }
        } else {
            alert("Por favor, digite um CEP válido com 8 dígitos.");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    };

    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.buscaBox}>
                        <input 
                            type="text" 
                            className={styles.input}
                            value={cep} 
                            onChange={(e) => setCep(e.target.value)} 
                            onKeyDown={handleKeyDown}
                            placeholder="Digite o CEP (ex: 01001000)"
                            maxLength={9}
                        />
                        <button className={styles.botao} onClick={search}>
                            Buscar
                        </button>
                    </div>

                    {endereco && (
                        <div className={styles.resultado}>
                            <p className={styles.item}><strong>CEP:</strong> {endereco.cep}</p>
                            <p className={styles.item}><strong>Rua:</strong> {endereco.logradouro || "Não informado"}</p>
                            <p className={styles.item}><strong>Bairro:</strong> {endereco.bairro || "Não informado"}</p>
                            <p className={styles.item}><strong>Cidade:</strong> {endereco.localidade}</p>
                            <p className={styles.item}><strong>Estado:</strong> {endereco.uf}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}