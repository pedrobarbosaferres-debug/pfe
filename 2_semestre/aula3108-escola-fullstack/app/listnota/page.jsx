"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import styles from "./listnota.module.css";

export default function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarNotas() {
            try {
                const resposta = await fetch("/api/notas");
                const dados = await resposta.json();

                if (!resposta.ok) {
                    throw new Error(dados.erro || "Não foi possível carregar as notas.");
                }

                setNotas(dados);
            } catch (error) {
                console.error("Erro ao carregar notas:", error);
                setErro(error.message || "Não foi possível carregar as notas.");
            } finally {
                setCarregando(false);
            }
        }

        buscarNotas();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section className={styles.headerSection}>
                    <h2>Lista de Notas</h2>
                    <p>Consulte as notas cadastradas para cada aluno.</p>
                </section>

                <section className={styles.tableCard}>
                    <p className={styles.total}>
                        Total: {notas.length} {notas.length === 1 ? "aluno" : "alunos"}
                    </p>
                    {erro && <p className={styles.error} role="alert">{erro}</p>}
                    {carregando ? (
                        <p className={styles.message}>Carregando notas...</p>
                    ) : notas.length === 0 && !erro ? (
                        <p className={styles.message}>Nenhuma nota cadastrada.</p>
                    ) : (
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Aluno</th>
                                        <th>RA</th>
                                        <th>Trabalho 1</th>
                                        <th>Trabalho 2</th>
                                        <th>Nota 1</th>
                                        <th>Nota 2</th>
                                        <th>Nota 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notas.map((nota) => (
                                        <tr key={nota.id_nota}>
                                            <td>{nota.nome}</td>
                                            <td>{nota.ra}</td>
                                            <td>{nota.t1}</td>
                                            <td>{nota.t2}</td>
                                            <td>{nota.n1}</td>
                                            <td>{nota.n2}</td>
                                            <td>{nota.n3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
