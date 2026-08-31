'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function CadastrarNota() {
  const [aluno, setAluno] = useState("Ana Beatriz Santos Silva - RM-2026-0101");
  const [disciplina, setDisciplina] = useState("Programação Web Fullstack");
  const [bimestre, setBimestre] = useState("2º Bimestre");
  const [notaProva, setNotaProva] = useState("");
  const [notaProjeto, setNotaProjeto] = useState("");
  const [notaAtitude, setNotaAtitude] = useState("");
  const [faltas, setFaltas] = useState("0");
  const [feedback, setFeedback] = useState("");
  const [saved, setSaved] = useState(false);

  const calcMedia = () => {
    const n1 = parseFloat(notaProva) || 0;
    const n2 = parseFloat(notaProjeto) || 0;
    const n3 = parseFloat(notaAtitude) || 0;
    
    if (!notaProva && !notaProjeto && !notaAtitude) return "-";
    
    // Cálculo ponderado SESI SENAI: (Prova*0.4 + Projeto*0.4 + Atitude*0.2)
    const media = (n1 * 0.4) + (n2 * 0.4) + (n3 * 0.2);
    return media.toFixed(1);
  };

  const mediaFinal = calcMedia();

  const handleSalvar = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 4000);
  };

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
                Coordenação Pedagógica • SESI / SENAI SP
              </div>
              <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Lançamento de Avaliações & Notas
              </h1>
              <p className="hero-description" style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                Registro oficial de notas bimestrais, competências técnicas e assiduidade dos estudantes.
              </p>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {saved && (
            <div style={{
              background: '#ECFDF5',
              border: '1px solid #10B981',
              color: '#065F46',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <strong>Notas registradas no Diário Eletrônico SESI SENAI!</strong>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>A média e a frequência do aluno foram atualizadas no boletim escolar.</p>
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: '24px' }}>
            {/* Formulário Principal */}
            <div className="form-card" style={{ marginBottom: 0 }}>
              <div style={{ borderBottom: '2px solid var(--border-light)', paddingBottom: '14px', marginBottom: '20px' }}>
                <span className="section-tag">Diário Eletrônico</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--sesi-blue-dark)' }}>
                  Lançar Nota de Avaliação
                </h2>
              </div>

              <form onSubmit={handleSalvar}>
                <div className="form-grid">
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Selecione o Aluno <span className="req">*</span></label>
                    <select 
                      className="form-select"
                      value={aluno}
                      onChange={(e) => setAluno(e.target.value)}
                    >
                      <option value="Ana Beatriz Santos Silva - RM-2026-0101">Ana Beatriz Santos Silva (RM-2026-0101) - 3º TDS</option>
                      <option value="Bruno Henrique Oliveira - RM-2026-0102">Bruno Henrique Oliveira (RM-2026-0102) - 2º ELE</option>
                      <option value="Camila Fernandes da Costa - RM-2026-0103">Camila Fernandes da Costa (RM-2026-0103) - 3º TDS</option>
                      <option value="Diego Martins Barbosa - RM-2026-0104">Diego Martins Barbosa (RM-2026-0104) - 1º MEC</option>
                      <option value="Eduarda Lima Ribeiro - RM-2026-0105">Eduarda Lima Ribeiro (RM-2026-0105) - 9º Ano SESI</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Componente Curricular / Matéria <span className="req">*</span></label>
                    <select 
                      className="form-select"
                      value={disciplina}
                      onChange={(e) => setDisciplina(e.target.value)}
                    >
                      <option value="Programação Web Fullstack">Programação Web Fullstack</option>
                      <option value="Banco de Dados e Nuvem">Banco de Dados e Nuvem</option>
                      <option value="Projetos de Inovação SENAI">Projetos de Inovação SENAI</option>
                      <option value="Robótica e Automação">Robótica e Automação SESI</option>
                      <option value="Matemática e Raciocínio Lógico">Matemática e Raciocínio Lógico</option>
                      <option value="Língua Portuguesa & Comunicação">Língua Portuguesa & Comunicação</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Período Letivo / Bimestre <span className="req">*</span></label>
                    <select 
                      className="form-select"
                      value={bimestre}
                      onChange={(e) => setBimestre(e.target.value)}
                    >
                      <option value="1º Bimestre">1º Bimestre</option>
                      <option value="2º Bimestre">2º Bimestre</option>
                      <option value="3º Bimestre">3º Bimestre</option>
                      <option value="4º Bimestre">4º Bimestre</option>
                      <option value="Exame Final / Recuperação">Exame Final / Recuperação</option>
                    </select>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', margin: '16px 0 20px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--sesi-blue-dark)', fontSize: '0.9rem', marginBottom: '14px' }}>
                    Critérios de Avaliação e Desempenho (Escala de 0 a 10)
                  </div>

                  <div className="form-grid" style={{ marginBottom: 0 }}>
                    <div className="form-group">
                      <label className="form-label">Avaliação Teórica / Prova (40%)</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                        required
                        placeholder="Ex: 9.0" 
                        className="form-input"
                        value={notaProva}
                        onChange={(e) => setNotaProva(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Projeto Prático / Laboratório (40%)</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                        required
                        placeholder="Ex: 9.5" 
                        className="form-input"
                        value={notaProjeto}
                        onChange={(e) => setNotaProjeto(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Engajamento & Atitude (20%)</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                        required
                        placeholder="Ex: 10.0" 
                        className="form-input"
                        value={notaAtitude}
                        onChange={(e) => setNotaAtitude(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Total de Faltas no Bimestre</label>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-input"
                        value={faltas}
                        onChange={(e) => setFaltas(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Parecer Pedagógico / Observação do Professor</label>
                  <textarea 
                    rows={3}
                    placeholder="Feedback sobre a evolução do discente, pontualidade nas entregas e competências demonstradas..." 
                    className="form-textarea"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
                  <Link href="/listanota" className="btn btn-outline">
                    Ver Boletins
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                      <polyline points="17 21 17 13 7 13 7 21"/>
                    </svg>
                    Gravar no Diário de Classe
                  </button>
                </div>
              </form>
            </div>

            {/* Painel Lateral de Prévia da Média */}
            <div>
              <div className="form-card" style={{ background: 'var(--sesi-blue-dark)', color: '#FFFFFF', border: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#FFA4A9', fontWeight: 700, letterSpacing: '0.5px' }}>
                    Cálculo de Média SESI / SENAI
                  </span>
                  <span className="badge badge-info" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
                    Média Mínima: 7.0
                  </span>
                </div>

                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>Média Calculada do Bimestre</div>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '3.2rem', 
                    fontWeight: 900, 
                    color: mediaFinal !== '-' && parseFloat(mediaFinal) >= 7.0 ? '#34D399' : (mediaFinal !== '-' ? '#FFA4A9' : '#FFFFFF') 
                  }}>
                    {mediaFinal}
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    {mediaFinal !== '-' && (
                      parseFloat(mediaFinal) >= 7.0 ? (
                        <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>✓ Aprovado / Acima da Média</span>
                      ) : (
                        <span className="badge badge-danger" style={{ fontSize: '0.85rem' }}>⚠ Atenção: Abaixo da Média (7.0)</span>
                      )
                    )}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.6' }}>
                  <p><strong>Critérios Oficiais SESI-SP / SENAI-SP:</strong></p>
                  <ul style={{ paddingLeft: '16px', marginTop: '6px', listStyleType: 'disc' }}>
                    <li>Prova Bimestral: peso 40%</li>
                    <li>Práticas em Laboratório / Projetos: peso 40%</li>
                    <li>Atitudes e Participação: peso 20%</li>
                    <li>Frequência mínima obrigatória: 75%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
