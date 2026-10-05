import { useState } from "react";
import styles from "../page.module.css";

export default function JurosCompostos() {
    const [capital, setCapital] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [tempo, setTempo] = useState('');
    const [result, setResult] = useState(null);

    const calcularJurosCompostos=(e)=>{
        e.preventDefault();

        const cap=parseFloat(capital);
        const tx=parseFloat(taxa)/100;
        const t=parseFloat(tempo);

        const montante=cap*Math.pow(1+tx,t);
        const juros=montante-cap;

        setResult({
            juros:juros.toFixed(2),
            montante:montante.toFixed(2)
        })
    };

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <p className={styles.eyebrow}>FINANÇAS SEM COMPLICAÇÃO</p>
                <h1>Juros compostos, <em>clareza</em> nos números.</h1>
                <p className={styles.subtitle}>Descubra o rendimento e o valor final de uma aplicação em poucos segundos.</p>
            </section>
            <section className={styles.calculator}>
                <form onSubmit={calcularJurosCompostos} className={styles.form}>
                    <div className={styles.formHeader}><span className={styles.step}>01</span><div><h2>Monte sua simulação</h2><p>Informe os dados da aplicação</p></div></div>
                    <label>Capital inicial<div className={styles.inputWrap}><span>R$</span><input type="number" min="0" step="0.01" placeholder="0,00" value={capital} onChange={(e) => setCapital(e.target.value)} required /></div></label>
                    <div className={styles.row}>
                        <label>Taxa de juros<div className={styles.inputWrap}><input type="number" min="0" step="0.01" placeholder="0,00" value={taxa} onChange={(e) => setTaxa(e.target.value)} required /><span>%</span></div></label>
                        <label>Tempo<div className={styles.inputWrap}><input type="number" min="0" step="1" placeholder="0" value={tempo} onChange={(e) => setTempo(e.target.value)} required /><span>meses</span></div></label>
                    </div>
                    <button type="submit">Calcular resultado <span aria-hidden="true">↗</span></button>
                </form>
                <div className={styles.result} aria-live="polite">
                    <div className={styles.resultHeader}><span className={styles.step}>02</span><p>Seu resultado</p></div>
                    {result ? <><p className={styles.resultLabel}>Montante final</p><strong>R$ {result.montante}</strong><div className={styles.interest}><span>Rendimento</span><b>+ R$ {result.juros}</b></div></> : <div className={styles.empty}><span aria-hidden="true">◌</span><p>Preencha os dados<br />para ver a simulação.</p></div>}
                </div>
            </section>
            <p className={styles.formula}>Fórmula utilizada: <b>M = C × (1 + i)ᵗ</b></p>
        </main>
    )
}