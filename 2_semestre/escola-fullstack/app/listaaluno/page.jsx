'use client'

import { useState, useEffect } from 'react';
import Header from "../componentes/header";
import styles from "./page.module.css";

export default function ListAluno() {
    const [alunos, setAlunos] = useState([]);
    const [busca, setBusca] = useState(''); // Estado para guardar a busca

    // Busca os alunos do banco de dados ao carregar a página (rota GET)
    const carregarAlunos = async () => {
        try {
            const response = await fetch('/api/alunos');
            if (response.ok) {
                const dados = await response.json();
                setAlunos(dados);
            }
        } catch (error) {
            console.error("Erro ao carregar alunos:", error);
        }
    };

    useEffect(() => {
        carregarAlunos();
    }, []);

    // Filtra os alunos pelo nome apenas se a busca tiver 3 ou mais caracteres
    const alunosFiltrados = busca.trim().length >= 3
        ? alunos.filter((aluno) =>
            aluno.nome?.toLowerCase().includes(busca.toLowerCase().trim())
          )
        : alunos;

    // Função para deletar utilizando o DELETE na API
    const handleDelete = async (id) => {
        if (!confirm("Tem certeza que deseja excluir este aluno?")) return;

        try {
            const response = await fetch('/api/alunos', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            if (response.ok) {
                carregarAlunos(); // Recarrega a lista do banco
            } else {
                alert("Erro ao excluir aluno.");
            }
        } catch (error) {
            console.error("Erro ao excluir:", error);
        }
    };

    // Função para editar todos os campos do aluno
    const handleEdit = async (aluno) => {
        const novoNome = prompt("Novo nome do aluno:", aluno.nome);
        if (novoNome === null) return;

        const novaIdade = prompt("Nova idade do aluno:", aluno.idade);
        if (novaIdade === null) return;

        const novaSerie = prompt("Nova série do aluno:", aluno.serie);
        if (novaSerie === null) return;

        const novoRa = prompt("Novo RA do aluno:", aluno.ra);
        if (novoRa === null) return;

        try {
            const response = await fetch('/api/alunos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: aluno.id || aluno.id_aluno,
                    nome: novoNome || aluno.nome,
                    idade: novaIdade ? Number(novaIdade) : aluno.idade,
                    serie: novaSerie || aluno.serie,
                    ra: novoRa || aluno.ra
                })
            });

            if (response.ok) {
                carregarAlunos(); // Recarrega a lista do banco
            } else {
                alert("Erro ao editar aluno.");
            }
        } catch (error) {
            console.error("Erro ao editar:", error);
        }
    };

    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.wrapper}>

                    <div className={styles.pageHeader}>
                        <div>
                            <span className={styles.tag}>ALUNOS</span>
                            <h2>Lista de Alunos</h2>
                            <p>
                                Visualize os alunos cadastrados no sistema escolar.
                            </p>
                        </div>
                    </div>

                    <section className={styles.card}>

                        <div className={styles.cardHeader}>
                            <div>
                                <h3>Alunos cadastrados</h3>
                                <p>Confira abaixo os dados dos alunos.</p>
                            </div>

                            <span className={styles.total}>
                                {alunosFiltrados.length} {alunosFiltrados.length === 1 ? 'aluno' : 'alunos'}
                            </span>
                        </div>

                        {/* Barra de Pesquisa */}
                        <div style={{ padding: '0 20px 16px 20px' }}>
                            <input
                                type="text"
                                placeholder="Digite pelo menos 3 caracteres para buscar pelo nome..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 14px',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                            {busca.length > 0 && busca.length < 3 && (
                                <small style={{ color: '#6b7280', marginTop: '4px', display: 'block' }}>
                                    Digite mais {3 - busca.length} caractere(s) para filtrar...
                                </small>
                            )}
                        </div>

                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Idade</th>
                                        <th>Série</th>
                                        <th>RA</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {alunosFiltrados.map((aluno) => (
                                        <tr key={aluno.id || aluno.id_aluno}>
                                            <td>
                                                <span className={styles.idBadge}>
                                                    {String(aluno.id || aluno.id_aluno).padStart(2, '0')}
                                                </span>
                                            </td>

                                            <td>
                                                <div className={styles.student}>
                                                    <div className={styles.avatar}>
                                                        {aluno.nome ? aluno.nome.charAt(0).toUpperCase() : 'A'}
                                                    </div>

                                                    <div>
                                                        <strong>{aluno.nome}</strong>
                                                        <small>Aluno</small>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>{aluno.idade}</td>

                                            <td>
                                                <span className={styles.serie}>
                                                    {aluno.serie}
                                                </span>
                                            </td>

                                            <td>
                                                <span className={styles.ra}>
                                                    {aluno.ra}
                                                </span>
                                            </td>

                                            <td>
                                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <button 
                                                        onClick={() => handleEdit(aluno)}
                                                        style={{ 
                                                            padding: '6px 14px', 
                                                            cursor: 'pointer', 
                                                            borderRadius: '6px', 
                                                            border: 'none', 
                                                            backgroundColor: '#2563eb', 
                                                            color: '#ffffff',
                                                            fontWeight: '500',
                                                            fontSize: '14px',
                                                            transition: 'background-color 0.2s ease'
                                                        }}
                                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button 
                                                        onClick={() => handleDelete(aluno.id || aluno.id_aluno)}
                                                        style={{ 
                                                            padding: '6px 14px', 
                                                            cursor: 'pointer', 
                                                            borderRadius: '6px', 
                                                            border: 'none', 
                                                            backgroundColor: '#ef4444', 
                                                            color: '#ffffff',
                                                            fontWeight: '500',
                                                            fontSize: '14px',
                                                            transition: 'background-color 0.2s ease'
                                                        }}
                                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                                                    >
                                                        Excluir
                                                    </button>
                                                </div>
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