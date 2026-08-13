"use client";

import Header from "../componentes/header";
import Footer from "../componentes/footer";
import styles from "./inicio.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.pageWrapper}>
        {/* SECTION 1: MAIN NEWSPAPER FRONT PAGE GRID */}
        <section className={styles.mainGrid}>
          {/* Column 1: Lead Headline / Manchete Principal */}
          <article className={styles.leadArticle}>
            <span className={styles.badge}>Destaque Principal • Ciência & Inovação</span>
            
            <h1 className={styles.leadTitle}>
              SESI Inova no Ensino e Lança Hub de Inteligência Artificial para Estudantes de SP
            </h1>
            
            <p className={styles.leadSubtitle}>
              Novo complexo tecnológico integrará laboratórios de robótica avançada, física quântica e IA aplicada em todas as unidades regionais a partir do próximo semestre.
            </p>

            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="Estudantes em laboratório de inovação do SESI"
                className={styles.leadImage}
              />
            </div>
            <p className={styles.imageCaption}>
              Estudantes testam protótipos de robótica autônoma no novo laboratório de inovação em São Paulo. Foto: Divulgação/SESI Press
            </p>

            <div className={styles.leadMeta}>
              <span>Por <strong>Carlos Silva</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </article>

          {/* Column 2: Secondary Headlines / Coluna Secundária */}
          <div className={styles.secondaryColumn}>
            <article className={styles.subArticle}>
              <span className={styles.subCategory}>Economia & Trabalho</span>
              <h2 className={styles.subTitle}>
                Setor Industrial registra alta de 14% na contratação de jovens aprendizes
              </h2>
              <p className={styles.subExcerpt}>
                Pesquisa aponta forte demanda por qualificação técnica em automação e desenvolvimento de software.
              </p>
            </article>

            <article className={styles.subArticle}>
              <span className={styles.subCategory}>Sustentabilidade</span>
              <h2 className={styles.subTitle}>
                Usina fotovoltaica reduz em 40% a pegada de carbono de unidades educacionais
              </h2>
              <p className={styles.subExcerpt}>
                Projeto modelo de energia limpa é expandido para mais 15 municípios do estado.
              </p>
            </article>

            <article className={styles.subArticle}>
              <span className={styles.subCategory}>Educação Internacional</span>
              <h2 className={styles.subTitle}>
                Alunos brasileiros conquistam medalha de ouro na Olimpíada de Robótica em Tóquio
              </h2>
              <p className={styles.subExcerpt}>
                Equipe superou mais de 80 países na categoria de automação e sustentabilidade ambiental.
              </p>
            </article>
          </div>

          {/* Column 3: Live News Sidebar / Em Cima da Hora */}
          <aside className={styles.liveSidebar}>
            <div className={styles.sidebarHeader}>
              <span className={styles.liveDot}></span>
              <span>Em Cima da Hora</span>
            </div>

            <div className={styles.liveList}>
              <div className={styles.liveItem}>
                <span className={styles.liveTime}>10:25</span>
                <p className={styles.liveText}>
                  Dólar abre em leve alta de 0,15% com mercado atento a novas medidas econômicas internacionais.
                </p>
              </div>

              <div className={styles.liveItem}>
                <span className={styles.liveTime}>09:40</span>
                <p className={styles.liveText}>
                  Campeonato Estadual de Robótica SESI reúne 120 equipes neste fim de semana em SP.
                </p>
              </div>

              <div className={styles.liveItem}>
                <span className={styles.liveTime}>08:50</span>
                <p className={styles.liveText}>
                  MEC divulga novas diretrizes para o ensino de tecnologia nas escolas públicas.
                </p>
              </div>

              <div className={styles.liveItem}>
                <span className={styles.liveTime}>08:15</span>
                <p className={styles.liveText}>
                  Previsão do Tempo: Frente fria se aproxima do Sudeste trazendo chuva fraca na sexta-feira.
                </p>
              </div>

              <div className={styles.liveItem}>
                <span className={styles.liveTime}>07:30</span>
                <p className={styles.liveText}>
                  Ministério da Ciência aprova nova verba para fomento de startups de biotecnologia.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <div className={styles.doubleDivider}></div>

        {/* SECTION 2: CATEGORIZED NEWSPAPER SECTIONS (CADERNOS) */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cadernos de Notícias</h2>
            <span className={styles.sectionSubtitle}>Edição Completa</span>
          </div>

          <div className={styles.categoriesGrid}>
            {/* Esportes */}
            <div className={styles.categoryCard}>
              <h3 className={styles.categoryCardTitle}>Esportes</h3>
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80"
                alt="Esportes"
                className={styles.cardImage}
              />
              <h4 className={styles.cardHead}>
                Seleção de Vôlei garante vaga nas finais com vitória maiúscula
              </h4>
              <p className={styles.cardDesc}>
                Equipe brasileira dominou a partida decisiva em 3 sets a 0 com grande atuação do bloco ofensivo.
              </p>

              <ul className={styles.quickLinksList}>
                <li className={styles.quickLinkItem}>Futebol: Guia completo para os jogos do fim de semana</li>
                <li className={styles.quickLinkItem}>Atletismo quebra recordes no Torneio Paulista</li>
                <li className={styles.quickLinkItem}>Maratona Internacional abre inscrições para 20.000 atletas</li>
              </ul>
            </div>

            {/* Economia */}
            <div className={styles.categoryCard}>
              <h3 className={styles.categoryCardTitle}>Economia</h3>
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
                alt="Economia"
                className={styles.cardImage}
              />
              <h4 className={styles.cardHead}>
                Inflação desacelera e Banco Central sinaliza nova queda na Selic
              </h4>
              <p className={styles.cardDesc}>
                Índice de preços ao consumidor ficou abaixo das expectativas do mercado no último trimestre.
              </p>

              <ul className={styles.quickLinksList}>
                <li className={styles.quickLinkItem}>Agronegócio bate recorde histórico em exportações de grãos</li>
                <li className={styles.quickLinkItem}>Dicas de investimento inteligente para iniciantes em 2026</li>
                <li className={styles.quickLinkItem}>Startup brasileira capta R$ 50 milhões em rodada internacional</li>
              </ul>
            </div>

            {/* Cultura & Ciência */}
            <div className={styles.categoryCard}>
              <h3 className={styles.categoryCardTitle}>Cultura & Ciência</h3>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                alt="Ciência e Espaço"
                className={styles.cardImage}
              />
              <h4 className={styles.cardHead}>
                Telescópio descobre novos exoplanetas em zona habitável
              </h4>
              <p className={styles.cardDesc}>
                Astrofísicos confirmam presença de atmosfera rica em oxigênio e água em sistema vizinho.
              </p>

              <ul className={styles.quickLinksList}>
                <li className={styles.quickLinkItem}>Mostra de Cinema de São Paulo homenageia diretores nacionais</li>
                <li className={styles.quickLinkItem}>Exposição interativa de Arte Digital abre este sábado</li>
                <li className={styles.quickLinkItem}>Feira do Livro reúne autores consagrados e novos talentos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: OPINION & EDITORIAL SECTION */}
        <section className={styles.opinionSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Opinião & Colunistas</h2>
            <span className={styles.sectionSubtitle}>Espaço Editorial</span>
          </div>

          <div className={styles.opinionGrid}>
            <div className={styles.opinionCard}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Dra. Mariana Mendes"
                className={styles.authorAvatar}
              />
              <div>
                <span className={styles.authorName}>Dra. Mariana Mendes</span>
                <h3 className={styles.opinionTitle}>
                  "A ética na Inteligência Artificial precisa ser prioridade urgente nas salas de aula"
                </h3>
              </div>
            </div>

            <div className={styles.opinionCard}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Dr. Roberto Alencar"
                className={styles.authorAvatar}
              />
              <div>
                <span className={styles.authorName}>Dr. Roberto Alencar</span>
                <h3 className={styles.opinionTitle}>
                  "O papel transformador do ensino técnico e prático no futuro da indústria nacional"
                </h3>
              </div>
            </div>

            <div className={styles.opinionCard}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                alt="Fernando Castro"
                className={styles.authorAvatar}
              />
              <div>
                <span className={styles.authorName}>Fernando Castro</span>
                <h3 className={styles.opinionTitle}>
                  "Reindustrialização verde: Como a inovação sustentável pode impulsionar o PIB"
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: NEWSLETTER SUBSCRIPTION BOX */}
        <section className={styles.newsletterBox}>
          <h2 className={styles.newsletterTitle}>Receba o Diário SESI NEWS</h2>
          <p className={styles.newsletterDesc}>
            Assine nossa newsletter gratuita e receba os principais destaques do dia, análises exclusivas e notícias de tecnologia direto no seu e-mail todas as manhãs.
          </p>

          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Digite seu e-mail principal..."
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Assinar Grátis
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}