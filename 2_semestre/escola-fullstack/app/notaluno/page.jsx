'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function NotaAluno() {
    const router = useRouter();

    const [aluno, setAluno] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!aluno.trim()) {
            alert("Por favor, preencha o nome do aluno.");
            return;
        }

        // Pega notas anteriores salvas ou a nota padrão
        const salvas = localStorage.getItem("notas_escolares");
        let lista = [];

        if (salvas) {
            try {
                lista = JSON.parse(salvas);
            } catch (err) {
                lista = [];
            }
        } else {
            lista = [
                {
                    id: "01",
                    aluno: "Rafael",
                    t1: "8,5",
                    t2: "9,0",
                    n1: "7,5",
                    n2: "8,0",
                    n3: "9,0"
                }
            ];
        }

        const novaNota = {
            id: String(lista.length + 1).padStart(2, "0"),
            aluno,
            t1: t1 || "-",
            t2: t2 || "-",
            n1: n1 || "-",
            n2: n2 || "-",
            n3: n3 || "-"
        };

        lista.push(novaNota);
        localStorage.setItem("notas_escolares", JSON.stringify(lista));

        setMensagem("Nota cadastrada com sucesso!");

        // Redireciona para a lista após 1 segundo
        setTimeout(() => {
            router.push("/listanota");
        }, 1200);
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.wrapper}>

                    {/* Cabeçalho */}
                    <div className={styles.pageHeader}>
                        <div>
                            <span className={styles.tag}>CADASTRO</span>
                            <h2>Cadastro de Notas</h2>
                            <p>Lance as notas e trabalhos do aluno no sistema escolar.</p>
                        </div>

                       
                    </div>

                    {/* Card com Formulário */}
                    <section className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <h3>Formulário de Avaliação</h3>
                                <p>Preencha os dados e notas abaixo.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {mensagem && (
                                <div className={styles.msgSucesso}>
                                    ✅ {mensagem} Redirecionando para a lista...
                                </div>
                            )}

                            {/* Aluno */}
                            <div className={styles.formGroup}>
                                <label htmlFor="aluno">Nome do Aluno:</label>
                                <input
                                    id="aluno"
                                    type="text"
                                    placeholder="Ex: Maria Clara"
                                    value={aluno}
                                    onChange={(e) => setAluno(e.target.value)}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            {/* Grade de Notas (T1, T2, N1, N2, N3) */}
                            <div className={styles.gridNotas}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="t1">T1 (Trabalho 1):</label>
                                    <input
                                        id="t1"
                                        type="text"
                                        placeholder="Ex: 8.5"
                                        value={t1}
                                        onChange={(e) => setT1(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="t2">T2 (Trabalho 2):</label>
                                    <input
                                        id="t2"
                                        type="text"
                                        placeholder="Ex: 9.0"
                                        value={t2}
                                        onChange={(e) => setT2(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="n1">N1 (Nota 1):</label>
                                    <input
                                        id="n1"
                                        type="text"
                                        placeholder="Ex: 7.5"
                                        value={n1}
                                        onChange={(e) => setN1(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="n2">N2 (Nota 2):</label>
                                    <input
                                        id="n2"
                                        type="text"
                                        placeholder="Ex: 8.0"
                                        value={n2}
                                        onChange={(e) => setN2(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="n3">N3 (Nota 3):</label>
                                    <input
                                        id="n3"
                                        type="text"
                                        placeholder="Ex: 9.0"
                                        value={n3}
                                        onChange={(e) => setN3(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <button type="submit" className={styles.btnSubmit}>
                                    Salvar Notas
                                </button>
                                <Link href="/listanota" className={styles.btnBack}>
                                    Ver Lista de Notas
                                </Link>
                            </div>
                        </form>
                    </section>

                </div>
            </main>
        </>
    );
}
