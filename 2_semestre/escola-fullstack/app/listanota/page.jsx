'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../componentes/header";
import styles from "./page.module.css";

const NOTAS_INICIAIS = [
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

export default function ListNota() {
    const [notas, setNotas] = useState(NOTAS_INICIAIS);

    useEffect(() => {
        const salvas = localStorage.getItem("notas_escolares");
        if (salvas) {
            try {
                const dados = JSON.parse(salvas);
                if (Array.isArray(dados) && dados.length > 0) {
                    setNotas(dados);
                }
            } catch (e) {
                console.error("Erro ao carregar notas:", e);
            }
        }
    }, []);

    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.wrapper}>

                    {/* Cabeçalho */}
                    <div className={styles.pageHeader}>
                        <div>
                            <span className={styles.tag}>NOTAS</span>

                            <h2>Lista de Notas</h2>

                            <p>
                                Visualize as notas dos alunos cadastrados no sistema.
                            </p>
                        </div>

                        <div className={styles.pageIcon}>
                            📝
                        </div>
                    </div>

                    {/* Card */}
                    <section className={styles.card}>

                        <div className={styles.cardHeader}>
                            <div>
                                <h3>Notas cadastradas</h3>

                                <p>
                                    Confira abaixo as notas dos alunos.
                                </p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <span className={styles.total}>
                                    {notas.length} {notas.length === 1 ? "aluno" : "alunos"}
                                </span>

                                <Link href="/notaluno" className={styles.actionBtn}>
                                    + Cadastrar Nota
                                </Link>
                            </div>
                        </div>

                        {/* Tabela */}
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Aluno</th>
                                        <th>T1</th>
                                        <th>T2</th>
                                        <th>N1</th>
                                        <th>N2</th>
                                        <th>N3</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {notas.map((item, index) => (
                                        <tr key={index}>
                                            {/* ID */}
                                            <td>
                                                <span className={styles.idBadge}>
                                                    {item.id || String(index + 1).padStart(2, "0")}
                                                </span>
                                            </td>

                                            {/* ALUNO */}
                                            <td>
                                                <div className={styles.student}>
                                                    <div className={styles.avatar}>
                                                        {item.aluno ? item.aluno.charAt(0).toUpperCase() : "A"}
                                                    </div>

                                                    <div>
                                                        <strong>{item.aluno}</strong>
                                                        <small>Aluno</small>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* T1 */}
                                            <td>
                                                <span className={styles.grade}>
                                                    {item.t1}
                                                </span>
                                            </td>

                                            {/* T2 */}
                                            <td>
                                                <span className={styles.grade}>
                                                    {item.t2}
                                                </span>
                                            </td>

                                            {/* N1 */}
                                            <td>
                                                <span className={styles.grade}>
                                                    {item.n1}
                                                </span>
                                            </td>

                                            {/* N2 */}
                                            <td>
                                                <span className={styles.grade}>
                                                    {item.n2}
                                                </span>
                                            </td>

                                            {/* N3 */}
                                            <td>
                                                <span className={styles.grade}>
                                                    {item.n3}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}