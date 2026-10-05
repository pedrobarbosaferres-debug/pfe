'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../componentes/header";
import styles from "../notaluno/page.module.css";

export default function CadastrarAluno() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Envia os dados para a rota da API (/api/alunos)
            const response = await fetch('/api/alunos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, idade, serie, ra }),
            });

            if (response.ok) {
                setMensagem("Aluno cadastrado com sucesso!");
                setTimeout(() => {
                    router.push("/listaaluno");
                }, 1200);
            } else {
                alert("Erro ao cadastrar aluno no banco de dados.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro de conexão ao cadastrar aluno.");
        }
    }

    async function handleEditar() {
        if (!ra) {
            alert("Informe o RA do aluno que deseja editar.");
            return;
        }

        try {
            const response = await fetch('/api/alunos', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, idade, serie, ra }),
            });

            if (response.ok) {
                setMensagem("Aluno editado com sucesso!");
                setTimeout(() => {
                    router.push("/listaaluno");
                }, 1200);
            } else {
                alert("Erro ao editar aluno. Verifique se o RA está correto.");
            }
        } catch (error) {
            console.error("Erro ao editar dados:", error);
            alert("Erro de conexão ao editar aluno.");
        }
    }

    async function handleExcluir() {
        if (!ra) {
            alert("Informe o RA do aluno que deseja excluir.");
            return;
        }

        if (!confirm("Tem certeza que deseja excluir o aluno com este RA?")) return;

        try {
            const response = await fetch('/api/alunos', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ra }),
            });

            if (response.ok) {
                setMensagem("Aluno excluído com sucesso!");
                setNome("");
                setIdade("");
                setSerie("");
                setRa("");
                setTimeout(() => {
                    router.push("/listaaluno");
                }, 1200);
            } else {
                alert("Erro ao excluir aluno. Verifique se o RA está correto.");
            }
        } catch (error) {
            console.error("Erro ao excluir aluno:", error);
            alert("Erro de conexão ao excluir aluno.");
        }
    }


    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.pageHeader}>
                        <div>
                            <span className={styles.tag}>ALUNOS</span>
                            <h2>Cadastro de Aluno</h2>
                            <p>Cadastre um novo aluno no sistema escolar.</p>
                        </div>
                       
                    </div>

                    <section className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div>
                                <h3>Dados do Aluno</h3>
                                <p>Preencha as informações básicas do estudante.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {mensagem && (
                                <div className={styles.msgSucesso}>
                                    ✅ {mensagem}
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor="nome">Nome Completo:</label>
                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Ex: Rafael Silva"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "15px" }}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="idade">Idade:</label>
                                    <input
                                        id="idade"
                                        type="text"
                                        placeholder="Ex: 15 anos"
                                        value={idade}
                                        onChange={(e) => setIdade(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="serie">Série:</label>
                                    <input
                                        id="serie"
                                        type="text"
                                        placeholder="Ex: 9º Ano"
                                        value={serie}
                                        onChange={(e) => setSerie(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="ra">RA:</label>
                                    <input
                                        id="ra"
                                        type="text"
                                        placeholder="Ex: 202301011"
                                        value={ra}
                                        onChange={(e) => setRa(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.actions} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <button type="submit" className={styles.btnSubmit}>
                                    Cadastrar Aluno
                                </button>
                                <button
                                    type="button"
                                    onClick={handleEditar}
                                    className={styles.btnSubmit}
                                    style={{ backgroundColor: "#2563eb" }}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleExcluir}
                                    className={styles.btnSubmit}
                                    style={{ backgroundColor: "#ef4444" }}
                                >
                                    Excluir
                                </button>
                                <Link href="/listaaluno" className={styles.btnBack}>
                                    Ver Lista de Alunos
                                </Link>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}