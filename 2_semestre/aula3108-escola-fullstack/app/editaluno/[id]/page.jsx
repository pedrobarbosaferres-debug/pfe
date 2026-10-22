"use client";

import { useEffect, useState } from "react";
import Header from "../../components/header";
import styles from "./cadaluno.module.css";
import { useRouter, useParams } from "next/navigation";

export default function EditAlunoPage() {
    const router = useRouter();
    const { id } = useParams();

    const [id_aluno, setIdAluno] = useState("")
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);


    useEffect(() => {
        async function buscarAluno() {
            try {
                setCarregando(true);
                const resposta = await fetch(`/api/alunos/${id}`);

                if (!resposta.ok) {
                    alert("Aluno não encontrado!");
                    router.push("/listaluno");
                    return;
                }

                const dados = await resposta.json();
                setIdAluno(dados.id_aluno || "");
                setNome(dados.nome || "");
                setIdade(dados.idade ?? "");
                setSerie(dados.serie || "");
                setRa(dados.ra ?? "");
            } catch (erro) {
                console.error("Erro ao carregar aluno:", erro);
                alert("Erro ao carregar dados do aluno.");
                router.push("/listaluno");
            } finally {
                setCarregando(false);
            }
        }

        buscarAluno();
    }, [id, router]);

    async function editarAluno(event) {
        event.preventDefault();

        try {
            setSalvando(true);
            const resposta = await fetch("/api/alunos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id_aluno,
                    nome,
                    idade,
                    serie,
                    ra,
                }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alert(dados.erro || "Erro ao editar o aluno.");
                return;
            }

            alert(dados.mensagem);
            router.push("/listaluno");
        } catch (erro) {
            console.error("Erro ao editar aluno:", erro);
            alert("Erro ao salvar os dados do aluno.");
        } finally {
            setSalvando(false);
        }
    }

    if (carregando) {
        return (
            <>
                <Header />
                <main className={styles.container}>
                    <p>Carregando informações do aluno...</p>
                </main>
            </>
        );
    }

    if (!id_aluno) {
        return null;
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>
                        Edição de Alunos
                    </h2>

                    <p className={styles.subtitle}>
                        Atualize os dados do aluno e salve as alterações.
                    </p>

                    <form className={styles.form} onSubmit={editarAluno}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nome">Nome</label>
                            <input
                                id="nome"
                                type="text"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite o nome do aluno"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="idade">Idade</label>
                            <input
                                id="idade"
                                type="number"
                                min="1"
                                required
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                placeholder="Digite a idade"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="serie">Série</label>
                            <input
                                id="serie"
                                type="text"
                                required
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                                placeholder="Digite a série"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="ra">RA</label>
                            <input
                                id="ra"
                                type="number"
                                required
                                value={ra}
                                onChange={(e) => setRa(e.target.value)}
                                placeholder="Digite o RA"
                            />
                        </div>

                        <button className={styles.button} type="submit" disabled={salvando}>
                            {salvando ? "Salvando..." : "Salvar alterações"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}