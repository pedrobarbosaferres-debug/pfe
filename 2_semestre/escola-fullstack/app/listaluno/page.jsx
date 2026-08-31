'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function ListaAlunos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cursoFilter, setCursoFilter] = useState('todos');

  const alunosMock = [
    {
      id: 1,
      rm: "RM-2026-0101",
      nome: "Ana Beatriz Santos Silva",
      curso: "Téc. Desenvolvimento de Sistemas",
      turma: "3º TDS - Manhã",
      unidade: "SESI / SENAI",
      email: "ana.silva@aluno.senai.br",
      status: "Ativo",
      frequencia: "98%"
    },
    {
      id: 2,
      rm: "RM-2026-0102",
      nome: "Bruno Henrique Oliveira",
      curso: "Téc. Eletroeletrônica",
      turma: "2º ELE - Tarde",
      unidade: "SENAI Mirandópolis",
      email: "bruno.oliveira@aluno.senai.br",
      status: "Ativo",
      frequencia: "95%"
    },
    {
      id: 3,
      rm: "RM-2026-0103",
      nome: "Camila Fernandes da Costa",
      curso: "Téc. Desenvolvimento de Sistemas",
      turma: "3º TDS - Manhã",
      unidade: "SESI / SENAI",
      email: "camila.costa@aluno.senai.br",
      status: "Ativo",
      frequencia: "100%"
    },
    {
      id: 4,
      rm: "RM-2026-0104",
      nome: "Diego Martins Barbosa",
      curso: "Téc. Mecânica Industrial",
      turma: "1º MEC - Noite",
      unidade: "SENAI Mirandópolis",
      email: "diego.barbosa@aluno.senai.br",
      status: "Ativo",
      frequencia: "91%"
    },
    {
      id: 5,
      rm: "RM-2026-0105",
      nome: "Eduarda Lima Ribeiro",
      curso: "Ensino Fundamental II",
      turma: "9º Ano A - Manhã",
      unidade: "SESI Mirandópolis",
      email: "eduarda.ribeiro@sesisp.org.br",
      status: "Ativo",
      frequencia: "97%"
    },
    {
      id: 6,
      rm: "RM-2026-0106",
      nome: "Felipe Gabriel de Almeida",
      curso: "Téc. Desenvolvimento de Sistemas",
      turma: "3º TDS - Manhã",
      unidade: "SESI / SENAI",
      email: "felipe.almeida@aluno.senai.br",
      status: "Ativo",
      frequencia: "94%"
    },
    {
      id: 7,
      rm: "RM-2026-0107",
      nome: "Gabriela Rocha Nogueira",
      curso: "Aprendizagem Mecânica",
      turma: "Turma B - Tarde",
      unidade: "SENAI Mirandópolis",
      email: "gabriela.rocha@aluno.senai.br",
      status: "Ativo",
      frequencia: "99%"
    }
  ];

  const filteredAlunos = alunosMock.filter((aluno) => {
    const matchesSearch = 
      aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.rm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCurso = 
      cursoFilter === 'todos' || 
      aluno.curso.toLowerCase().includes(cursoFilter.toLowerCase());

    return matchesSearch && matchesCurso;
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
                Registro Acadêmico • SESI SENAI Mirandópolis
              </div>
              <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Quadro de Alunos Matriculados
              </h1>
              <p className="hero-description" style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                Consulta de prontuários, situação cadastral, enturmação e histórico de frequência dos estudantes.
              </p>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {/* Filtros e Busca */}
          <div className="form-card" style={{ padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr auto auto', gap: '14px', alignItems: 'center' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Buscar por Nome, RM ou E-mail</label>
                <input 
                  type="text" 
                  placeholder="Digite para pesquisar..." 
                  className="form-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Filtrar por Modalidade/Curso</label>
                <select 
                  className="form-select"
                  value={cursoFilter}
                  onChange={(e) => setCursoFilter(e.target.value)}
                >
                  <option value="todos">Todos os Cursos / Modalidades</option>
                  <option value="Desenvolvimento">Téc. Desenvolvimento de Sistemas</option>
                  <option value="Eletroeletrônica">Téc. Eletroeletrônica</option>
                  <option value="Mecânica">Téc. Mecânica Industrial</option>
                  <option value="Fundamental">Ensino Fundamental II - SESI</option>
                </select>
              </div>

              <div style={{ alignSelf: 'flex-end' }}>
                <Link href="/cadaaluno" className="btn btn-primary btn-sm" style={{ padding: '10px 16px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Novo Aluno
                </Link>
              </div>

              <div style={{ alignSelf: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => alert("Relatório oficial SESI/SENAI preparado para impressão.")}
                  className="btn btn-outline btn-sm" 
                  style={{ padding: '10px 16px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"/>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                    <rect x="6" y="14" width="12" height="8"/>
                  </svg>
                  Exportar
                </button>
              </div>
            </div>
          </div>

          {/* Tabela de Alunos */}
          <div className="table-responsive">
            <table className="sesi-table">
              <thead>
                <tr>
                  <th>RM</th>
                  <th>Nome do Aluno</th>
                  <th>Curso / Habilitação</th>
                  <th>Turma / Turno</th>
                  <th>Unidade</th>
                  <th>Frequência</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlunos.length > 0 ? (
                  filteredAlunos.map((aluno) => (
                    <tr key={aluno.id}>
                      <td>
                        <strong style={{ color: 'var(--sesi-blue)', fontFamily: 'var(--font-heading)' }}>
                          {aluno.rm}
                        </strong>
                      </td>
                      <td>
                        <div>
                          <strong>{aluno.nome}</strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{aluno.email}</div>
                        </div>
                      </td>
                      <td>{aluno.curso}</td>
                      <td>{aluno.turma}</td>
                      <td>
                        <span style={{ fontSize: '0.8rem', color: 'var(--sesi-blue-dark)', fontWeight: 600 }}>
                          {aluno.unidade}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontWeight: 700, color: 'var(--sesi-blue)' }}>{aluno.frequencia}</span>
                      </td>
                      <td>
                        <span className="badge badge-success">
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                          {aluno.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', gap: '6px' }}>
                          <Link href="/notaluno" className="btn btn-primary btn-sm" style={{ padding: '4px 8px', fontSize: '0.75rem' }}>
                            Notas
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      Nenhum aluno encontrado com os termos pesquisados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>Mostrando <strong>{filteredAlunos.length}</strong> de <strong>{alunosMock.length}</strong> alunos matriculados</span>
            <span>Sistema Escolar Integrado SESI SENAI SP</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
