import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function Principal() {
  const modules = [
    {
      id: "cadaaluno",
      title: "Cadastrar Aluno",
      category: "Secretaria & Matrículas",
      description: "Cadastre novos alunos com documentação completa, turma, dados de contato e responsáveis.",
      href: "/cadaaluno",
      accent: "red",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <line x1="19" y1="8" x2="19" y2="14"/>
          <line x1="22" y1="11" x2="16" y2="11"/>
        </svg>
      )
    },
    {
      id: "listaluno",
      title: "Lista de Alunos",
      category: "Gestão de Turmas",
      description: "Consulte a relação completa de discentes matriculados no SESI e SENAI, filtre por turma e status.",
      href: "/listaluno",
      accent: "blue",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: "notaluno",
      title: "Lançamento de Notas",
      category: "Avaliação Docente",
      description: "Lance notas de trabalhos, provas bimestrais, projetos práticos e controle de frequência por matéria.",
      href: "/notaluno",
      accent: "red",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
      )
    },
    {
      id: "listanota",
      title: "Boletins & Desempenho",
      category: "Acompanhamento Pedagógico",
      description: "Visualize relatórios de notas bimestrais, médias consolidadas e situação acadêmica por estudante.",
      href: "/listanota",
      accent: "blue",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* Banner Hero Institucional */}
        <section className="hero-sesi">
          <div className="hero-container">
            <div>
              <div className="hero-tag">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#FFD100' }}></span>
                SESI SENAI Mirandópolis • Ano Letivo 2026
              </div>
              <h1 className="hero-title">
                Sistema de Gestão Escolar <span>SESI SENAI</span>
              </h1>
              <p className="hero-description">
                Ambiente digital integrado para gestão escolar, controle de matrículas, acompanhamento pedagógico e lançamento de avaliações do Centro Educacional SESI e Escola SENAI de Mirandópolis.
              </p>
              <div className="hero-actions">
                <Link href="/cadaaluno" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <line x1="19" y1="8" x2="19" y2="14"/>
                    <line x1="22" y1="11" x2="16" y2="11"/>
                  </svg>
                  Novo Cadastro
                </Link>
                <Link href="/listaluno" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Consultar Alunos
                </Link>
                <Link href="/notaluno" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  Lançar Notas
                </Link>
              </div>
            </div>

            {/* Card de Resumo no Hero */}
            <div className="hero-badge-card">
              <div className="hero-badge-header">
                <div className="hero-badge-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD100" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Painel de Controle
                </div>
                <span className="hero-status-pill">Sistema Operante</span>
              </div>
              <div className="hero-metrics-grid">
                <div className="hero-metric-box">
                  <div className="hero-metric-num">842</div>
                  <div className="hero-metric-lbl">Alunos Matriculados</div>
                </div>
                <div className="hero-metric-box">
                  <div className="hero-metric-num">28</div>
                  <div className="hero-metric-lbl">Turmas Ativas</div>
                </div>
                <div className="hero-metric-box">
                  <div className="hero-metric-num">8.7</div>
                  <div className="hero-metric-lbl">Média Acadêmica</div>
                </div>
                <div className="hero-metric-box">
                  <div className="hero-metric-num">96.8%</div>
                  <div className="hero-metric-lbl">Frequência Geral</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <div className="content-wrapper">
          {/* Módulos do Sistema */}
          <div className="section-header">
            <span className="section-tag">Navegação Rápida</span>
            <h2 className="section-title">Módulos Escolares</h2>
            <p className="section-subtitle">
              Acesse com facilidade os principais serviços de gestão acadêmica e administrativa da unidade.
            </p>
          </div>

          <div className="module-grid">
            {modules.map((mod) => (
              <Link 
                key={mod.id} 
                href={mod.href}
                className={`module-card ${mod.accent === 'red' ? 'accent-red' : ''}`}
              >
                <div>
                  <div className="module-icon-wrap">
                    {mod.icon}
                  </div>
                  <div className="module-category">{mod.category}</div>
                  <h3 className="module-name">{mod.title}</h3>
                  <p className="module-desc">{mod.description}</p>
                </div>
                <div className="module-link-action">
                  <span>Acessar Módulo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Indicadores / Estatísticas */}
          <div className="section-header">
            <span className="section-tag">Desempenho Institucional</span>
            <h2 className="section-title">Indicadores da Unidade</h2>
            <p className="section-subtitle">Acompanhamento de metas educacionais e métricas de qualidade SESI-SP e SENAI-SP.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <div className="stat-value">842</div>
                <div className="stat-label">Alunos em Formação</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div>
                <div className="stat-value">46</div>
                <div className="stat-label">Docentes e Instrutores</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                  <polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <div>
                <div className="stat-value">94.2%</div>
                <div className="stat-label">Índice de Aprovação</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <div className="stat-value">100%</div>
                <div className="stat-label">Conformidade Pedagógica</div>
              </div>
            </div>
          </div>

          {/* Mural de Avisos e Notícias Institucionais */}
          <div className="notices-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="section-tag">Comunicação Oficial</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--sesi-blue-dark)' }}>
                  Avisos e Comunicados SESI / SENAI Mirandópolis
                </h3>
              </div>
              <span className="badge badge-info">Atualizado hoje</span>
            </div>

            <div className="notices-list">
              <div className="notice-item">
                <div className="notice-date">📅 05 de Setembro de 2026</div>
                <div className="notice-title">Feira de Ciência, Tecnologia e Inovação 2026</div>
                <p className="notice-excerpt">
                  Apresentação dos projetos integradores dos alunos do Ensino Médio e Cursos Técnicos no auditório central.
                </p>
              </div>

              <div className="notice-item">
                <div className="notice-date">📅 12 de Setembro de 2026</div>
                <div className="notice-title">Fechamento do 2º Bimestre e Conselho de Classe</div>
                <p className="notice-excerpt">
                  Docentes devem lançar todas as notas e faltas no portal até às 18h00 impreterivelmente.
                </p>
              </div>

              <div className="notice-item">
                <div className="notice-date">📅 18 de Setembro de 2026</div>
                <div className="notice-title">Abertura das Inscrições - Vestibulinho SENAI</div>
                <p className="notice-excerpt">
                  Processo seletivo para cursos de Aprendizagem Industrial e Habilitação Técnica com bolsas de estudo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}