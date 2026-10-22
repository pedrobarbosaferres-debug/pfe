"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import styles from "./notaaluno.module.css";

const camposNotas = [
    { nome: "t1", rotulo: "Trabalho 1" },
    { nome: "t2", rotulo: "Trabalho 2" },
    { nome: "n1", rotulo: "Nota 1" },
    { nome: "n2", rotulo: "Nota 2" },
    { nome: "n3", rotulo: "Nota 3" },
];

export default function NotaAluno() {
    const [alunos, setAlunos] = useState([]);
    const [idAluno, setIdAluno] = useState("");
    const [notas, setNotas] = useState({ t1: "", t2: "", n1: "", n2: "", n3: "" });
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        async function buscarAlunos() {
            try {
                const resposta = await fetch("/api/alunos");
                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os alunos.");
                }
                setAlunos(await resposta.json());
            } catch (error) {
                console.error("Erro ao carregar alunos:", error);
                setErro("Não foi possível carregar os alunos. Tente novamente.");
            } finally {
                setCarregando(false);
            }
        }

        buscarAlunos();
    }, []);

    async function cadastrarNotas(event) {
        event.preventDefault();
        setErro("");
        setMensagem("");
        setSalvando(true);

        try {
            const resposta = await fetch("/api/notas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_aluno: idAluno, ...notas }),
            });
            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || "Não foi possível cadastrar as notas.");
                return;
            }

            setMensagem(dados.mensagem);
            setIdAluno("");
            setNotas({ t1: "", t2: "", n1: "", n2: "", n3: "" });
        } catch (error) {
            console.error("Erro ao cadastrar notas:", error);
            setErro("Não foi possível cadastrar as notas. Tente novamente.");
        } finally {
            setSalvando(false);
        }
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section className={styles.card}>
                    <h2 className={styles.title}>Cadastro de Notas</h2>
                    <p className={styles.subtitle}>Selecione o aluno e informe suas notas.</p>

                    {erro && <p className={styles.error} role="alert">{erro}</p>}
                    {mensagem && <p className={styles.success} role="status">{mensagem}</p>}

                    {!carregando && alunos.length === 0 ? (
                        <p className={styles.notice}>Cadastre um aluno antes de registrar as notas.</p>
                    ) : (
                        <form className={styles.form} onSubmit={cadastrarNotas}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="aluno">Aluno</label>
                                <select
                                    id="aluno"
                                    value={idAluno}
                                    onChange={(event) => setIdAluno(event.target.value)}
                                    required
                                    disabled={carregando || salvando}
                                >
                                    <option value="">
                                        {carregando ? "Carregando alunos..." : "Selecione um aluno"}
                                    </option>
                                    {alunos.map((aluno) => (
                                        <option key={aluno.id_aluno} value={aluno.id_aluno}>
                                            {aluno.nome} (RA: {aluno.ra})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {camposNotas.map((campo) => (
                                <div className={styles.inputGroup} key={campo.nome}>
                                    <label htmlFor={campo.nome}>{campo.rotulo}</label>
                                    <input
                                        id={campo.nome}
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.01"
                                        value={notas[campo.nome]}
                                        onChange={(event) => setNotas({
                                            ...notas,
                                            [campo.nome]: event.target.value,
                                        })}
                                        placeholder="Nota de 0 a 10"
                                        required
                                        disabled={salvando}
                                    />
                                </div>
                            ))}

                            <button className={styles.button} type="submit" disabled={carregando || salvando}>
                                {salvando ? "Salvando..." : "Cadastrar notas"}
                            </button>
                        </form>
                    )}
                </section>
            </main>
        </>
    );
}
