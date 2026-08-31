'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function CadastrarAluno() {
  const [formData, setFormData] = useState({
    nome: '',
    rm: '',
    cpf: '',
    nascimento: '',
    email: '',
    telefone: '',
    unidade: 'SESI Mirandópolis - CE 352',
    curso: 'Ensino Médio com Itinerário Técnico - Desenvolvimento de Sistemas',
    periodo: 'Manhã',
    responsavel: '',
    telResponsavel: '',
    observacoes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
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
                Secretaria Escolar • SESI / SENAI SP
              </div>
              <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Ficha de Matrícula e Cadastro do Aluno
              </h1>
              <p className="hero-description" style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                Preencha os dados cadastrais do estudante para efetivação de matrícula no sistema acadêmico.
              </p>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {submitted && (
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
                <strong>Aluno cadastrado com sucesso no Sistema SESI SENAI!</strong>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>Registro de Matrícula (RM) gerado e vinculado à turma.</p>
              </div>
            </div>
          )}

          <div className="form-card">
            <div style={{ borderBottom: '2px solid var(--border-light)', paddingBottom: '16px', marginBottom: '24px' }}>
              <span className="section-tag">Dados Cadastrais</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--sesi-blue-dark)' }}>
                1. Informações Pessoais do Aluno
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Nome Completo do Aluno <span className="req">*</span></label>
                  <input 
                    type="text" 
                    name="nome" 
                    required 
                    placeholder="Ex: Carlos Eduardo de Oliveira" 
                    className="form-input"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Número de Matrícula (RM) <span className="req">*</span></label>
                  <input 
                    type="text" 
                    name="rm" 
                    required 
                    placeholder="Ex: RM-2026-9812" 
                    className="form-input"
                    value={formData.rm}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">CPF do Aluno <span className="req">*</span></label>
                  <input 
                    type="text" 
                    name="cpf" 
                    required 
                    placeholder="000.000.000-00" 
                    className="form-input"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Data de Nascimento <span className="req">*</span></label>
                  <input 
                    type="date" 
                    name="nascimento" 
                    required 
                    className="form-input"
                    value={formData.nascimento}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">E-mail Institucional / Contato <span className="req">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="aluno@aluno.senai.br" 
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Telefone / WhatsApp <span className="req">*</span></label>
                  <input 
                    type="tel" 
                    name="telefone" 
                    required 
                    placeholder="(18) 99999-9999" 
                    className="form-input"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Seção 2: Dados Acadêmicos */}
              <div style={{ borderBottom: '2px solid var(--border-light)', paddingBottom: '16px', margin: '32px 0 24px' }}>
                <span className="section-tag">Enturmação</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--sesi-blue-dark)' }}>
                  2. Dados do Curso e Unidade SESI / SENAI
                </h2>
              </div>

              <div className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Unidade Escolar SESI / SENAI <span className="req">*</span></label>
                  <select name="unidade" className="form-select" value={formData.unidade} onChange={handleChange}>
                    <option value="SESI Mirandópolis - CE 352">Centro Educacional SESI Mirandópolis (CE 352)</option>
                    <option value="SENAI Mirandópolis - CFP">Escola SENAI Mirandópolis - Formação Profissional</option>
                    <option value="SESI SENAI Integrado">Programa Integrado SESI SENAI Ensino Médio + Técnico</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Curso / Turma <span className="req">*</span></label>
                  <select name="curso" className="form-select" value={formData.curso} onChange={handleChange}>
                    <option value="Ensino Médio com Itinerário Técnico - Desenvolvimento de Sistemas">Ensino Médio + Técnico em Desenvolvimento de Sistemas</option>
                    <option value="Técnico em Eletroeletrônica">Técnico em Eletroeletrônica - SENAI</option>
                    <option value="Técnico em Mecânica Industrial">Técnico em Mecânica Industrial - SENAI</option>
                    <option value="Ensino Fundamental II - SESI">Ensino Fundamental II (6º ao 9º Ano) - SESI</option>
                    <option value="Aprendizagem Industrial - Mecânico de Usinagem">Aprendizagem Industrial - Mecânico de Usinagem</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Turno / Período <span className="req">*</span></label>
                  <select name="periodo" className="form-select" value={formData.periodo} onChange={handleChange}>
                    <option value="Manhã">Manhã (07h00 - 12h20)</option>
                    <option value="Tarde">Tarde (13h00 - 18h20)</option>
                    <option value="Noite">Noite (18h50 - 22h30)</option>
                    <option value="Integral">Integral SESI</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Ano Letivo</label>
                  <input type="text" disabled value="2026 - 2º Semestre" className="form-input" style={{ background: '#F1F5F9' }} />
                </div>
              </div>

              {/* Seção 3: Responsável Legal */}
              <div style={{ borderBottom: '2px solid var(--border-light)', paddingBottom: '16px', margin: '32px 0 24px' }}>
                <span className="section-tag">Responsabilidade Legal</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--sesi-blue-dark)' }}>
                  3. Dados do Responsável (Caso Menor de Idade)
                </h2>
              </div>

              <div className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Nome do Pai / Mãe ou Responsável Legal</label>
                  <input 
                    type="text" 
                    name="responsavel" 
                    placeholder="Nome completo do responsável" 
                    className="form-input"
                    value={formData.responsavel}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Telefone do Responsável</label>
                  <input 
                    type="tel" 
                    name="telResponsavel" 
                    placeholder="(18) 99999-0000" 
                    className="form-input"
                    value={formData.telResponsavel}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Observações Médicas ou Pedagógicas</label>
                  <textarea 
                    name="observacoes" 
                    rows={3} 
                    placeholder="Restrições alimentares, necessidades educacionais especiais ou observações da secretaria..." 
                    className="form-textarea"
                    value={formData.observacoes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Botões de Ação */}
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid var(--border-light)', paddingTop: '20px', flexWrap: 'wrap' }}>
                <Link href="/listaluno" className="btn btn-outline">
                  Ver Lista de Alunos
                </Link>
                <button type="submit" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                    <polyline points="17 21 17 13 7 13 7 21"/>
                    <polyline points="7 3 7 8 15 8"/>
                  </svg>
                  Salvar Matrícula SESI / SENAI
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
