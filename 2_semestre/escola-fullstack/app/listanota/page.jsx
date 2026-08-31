'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function ListaNotas() {
  const [turmaFilter, setTurmaFilter] = useState("3º TDS");
  const [disciplinaFilter, setDisciplinaFilter] = useState("todas");
  const [buscaAluno, setBuscaAluno] = useState("");

  const notasMock = [
    {
      id: 1,
      rm: "RM-2026-0101",
      nome: "Ana Beatriz Santos Silva",
      turma: "3º TDS",
      disciplina: "Programação Web Fullstack",
      b1: 9.5,
      b2: 9.0,
      b3: 9.8,
      b4: 9.2,
      media: 9.4,
      faltas: 2,
      situacao: "Aprovado"
    },
    {
      id: 2,
      rm: "RM-2026-0102",
      nome: "Bruno Henrique Oliveira",
      turma: "2º ELE",
      disciplina: "Eletroeletrônica Básica",
      b1: 8.0,
      b2: 7.5,
      b3: 8.5,
      b4: 8.0,
      media: 8.0,
      faltas: 6,
      situacao: "Aprovado"
    },
    {
      id: 3,
      rm: "RM-2026-0103",
      nome: "Camila Fernandes da Costa",
      turma: "3º TDS",
      disciplina: "Banco de Dados & Nuvem",
      b1: 10.0,
      b2: 9.5,
      b3: 10.0,
      b4: 9.8,
      media: 9.8,
      faltas: 0,
      situacao: "Aprovado"
    },
    {
      id: 4,
      rm: "RM-2026-0104",
      nome: "Diego Martins Barbosa",
      turma: "1º MEC",
      disciplina: "Metrologia e Desenho Técnico",
      b1: 6.0,
      b2: 6.5,
      b3: 7.0,
      b4: 6.8,
      media: 6.6,
      faltas: 12,
      situacao: "Recuperação"
    },
    {
      id: 5,
      rm: "RM-2026-0105",
      nome: "Eduarda Lima Ribeiro",
      turma: "9º Ano SESI",
      disciplina: "Robótica Educacional SESI",
      b1: 9.0,
      b2: 8.8,
      b3: 9.2,
      b4: 9.5,
      media: 9.1,
      faltas: 4,
      situacao: "Aprovado"
    },
    {
      id: 6,
      rm: "RM-2026-0106",
      nome: "Felipe Gabriel de Almeida",
      turma: "3º TDS",
      disciplina: "Programação Web Fullstack",
      b1: 8.5,
      b2: 8.0,
      b3: 8.7,
      b4: 9.0,
      media: 8.6,
      faltas: 5,
      situacao: "Aprovado"
    }
  ];

  const filteredNotas = notasMock.filter((item) => {
    const matchesBusca = 
      item.nome.toLowerCase().includes(buscaAluno.toLowerCase()) ||
      item.rm.toLowerCase().includes(buscaAluno.toLowerCase());

    const matchesTurma = turmaFilter === "todas" || item.turma.includes(turmaFilter);
    const matchesDisciplina = disciplinaFilter === "todas" || item.disciplina.toLowerCase().includes(disciplinaFilter.toLowerCase());

    return matchesBusca && matchesTurma && matchesDisciplina;
  });

  return (
    <>
      <Header />

      <main>
        {/* Banner da Página */}
        <section className="hero-sesi" style={{ padding: '36px 20px 42px' }}>
          <div className="hero-container" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <div className="hero-tag">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#FFD100' }}></span>
                Conselho de Classe • SESI / SENAI SP
              </div>
              <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Boletim Escolar & Histórico de Avaliações
              </h1>
              <p className="hero-description" style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                Acompanhamento de médias bimestrais, faltas e situação de rendimento acadêmico por estudante e componente curricular.
              </p>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {/* Filtros */}
          <div className="form-card" style={{ padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: '14px', alignItems: 'center' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Buscar Aluno ou RM</label>
                <input 
                  type="text" 
                  placeholder="Nome ou RM do aluno..." 
                  className="form-input"
                  value={buscaAluno}
                  onChange={(e) => setBuscaAluno(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Turma</label>
                <select 
                  className="form-select"
                  value={turmaFilter}
                  onChange={(e) => setTurmaFilter(e.target.value)}
                >
                  <option value="todas">Todas as Turmas</option>
                  <option value="3º TDS">3º TDS - Téc. Desenvolvimento de Sistemas</option>
                  <option value="2º ELE">2º ELE - Téc. Eletroeletrônica</option>
                  <option value="1º MEC">1º MEC - Téc. Mecânica</option>
                  <option value="9º Ano SESI">9º Ano - Ensino Fundamental SESI</option>
                </select>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Componente Curricular</label>
                <select 
                  className="form-select"
                  value={disciplinaFilter}
                  onChange={(e) => setDisciplinaFilter(e.target.value)}
                >
                  <option value="todas">Todas as Matérias</option>
                  <option value="Programação Web">Programação Web Fullstack</option>
                  <option value="Banco de Dados">Banco de Dados & Nuvem</option>
                  <option value="Eletroeletrônica">Eletroeletrônica</option>
                  <option value="Metrologia">Metrologia</option>
                  <option value="Robótica">Robótica Educacional SESI</option>
                </select>
              </div>

              <div style={{ alignSelf: 'flex-end' }}>
                <Link href="/notaluno" className="btn btn-primary btn-sm" style={{ padding: '10px 16px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Lançar Nota
                </Link>
              </div>
            </div>
          </div>

          {/* Tabela de Notas */}
          <div className="table-responsive">
            <table className="sesi-table">
              <thead>
                <tr>
                  <th>RM / Aluno</th>
                  <th>Turma</th>
                  <th>Componente Curricular</th>
                  <th style={{ textAlign: 'center' }}>1º Bim</th>
                  <th style={{ textAlign: 'center' }}>2º Bim</th>
                  <th style={{ textAlign: 'center' }}>3º Bim</th>
                  <th style={{ textAlign: 'center' }}>4º Bim</th>
                  <th style={{ textAlign: 'center' }}>Média Final</th>
                  <th style={{ textAlign: 'center' }}>Faltas</th>
                  <th style={{ textAlign: 'center' }}>Situação</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotas.length > 0 ? (
                  filteredNotas.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong style={{ color: 'var(--sesi-blue)' }}>{item.nome}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.rm}</div>
                      </td>
                      <td>
                        <span className="badge badge-info">{item.turma}</span>
                      </td>
                      <td>{item.disciplina}</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.b1.toFixed(1)}</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.b2.toFixed(1)}</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.b3.toFixed(1)}</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.b4.toFixed(1)}</td>
                      <td style={{ textAlign: 'center' }}>
                        <strong style={{ 
                          fontSize: '1rem', 
                          fontFamily: 'var(--font-heading)',
                          color: item.media >= 7.0 ? '#059669' : '#DC2626'
                        }}>
                          {item.media.toFixed(1)}
                        </strong>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span style={{ color: item.faltas > 10 ? '#DC2626' : 'inherit', fontWeight: item.faltas > 10 ? 700 : 400 }}>
                          {item.faltas} h/a
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {item.situacao === 'Aprovado' ? (
                          <span className="badge badge-success">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                            Aprovado
                          </span>
                        ) : (
                          <span className="badge badge-danger">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }}></span>
                            Recuperação
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      Nenhum registro de avaliação encontrado com os filtros aplicados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>Critério de Aprovação SESI / SENAI: Média mínima <strong>7.0</strong> e Frequência mínima <strong>75%</strong></span>
            <button 
              type="button" 
              onClick={() => alert("Gerando boletim individual em PDF...")} 
              className="btn btn-outline btn-sm"
            >
              Imprimir Boletim Geral
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
