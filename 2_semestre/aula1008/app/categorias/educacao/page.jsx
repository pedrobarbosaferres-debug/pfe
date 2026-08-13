import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import styles from "../categorias.module.css";

export default function Educacao() {
  const eduArticles = [
    {
      id: 1,
      tag: "Cursos SESI / SENAI",
      title: "Inscrições abertas para mais de 15.000 bolsas de estudo integrais em cursos técnicos",
      excerpt: "Vagas englobam áreas como programação, mecatrônica, inteligência artificial, automação e energias renováveis.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      date: "13 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 2,
      tag: "Ensino Médio Tecnológico",
      title: "Novo modelo pedagógico une disciplinas tradicionais com trilhas de aprendizagem em TI",
      excerpt: "Estudantes concluem o ensino médio com certificação profissional reconhecida pelo mercado de trabalho.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      date: "12 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 3,
      tag: "Vestibulares & ENEM",
      title: "ENEM 2026: Confiras as principais datas, edital atualizado e dicas de redação nota 1.000",
      excerpt: "Professores especialistas analisam os temas mais prováveis e a estrutura exigida na prova nacional.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      date: "11 de Agosto, 2026",
      readTime: "6 min de leitura"
    },
    {
      id: 4,
      tag: "Inclusão & Acessibilidade",
      title: "Escolas do SESI implementam salas com recursos de tecnologia assistiva de ponta",
      excerpt: "Dispositivos adaptados garantem acessibilidade total a alunos com deficiência visual, auditiva e motora.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
      date: "10 de Agosto, 2026",
      readTime: "3 min de leitura"
    },
    {
      id: 5,
      tag: "Intercâmbio Estudantil",
      title: "Programa de bolsas envia 100 alunos da rede pública para imersão em universidades da Europa",
      excerpt: "Estudantes selecionados participarão de cursos de verão em tecnologia e sustentabilidade na Alemanha e Inglaterra.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      date: "09 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 6,
      tag: "Pedagogia Moderna",
      title: "Gamificação na sala de aula aumenta engajamento de estudantes em matemática e física",
      excerpt: "Metodologia ativa utiliza jogos interativos para simplificar conceitos complexos de ciências exatas.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
      date: "08 de Agosto, 2026",
      readTime: "4 min de leitura"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Educação & Formação</h1>
            <p className={styles.categoryMeta}>Caderno de Cursos, Pedagogia, Formação Profissional e Oportunidades</p>
          </div>
          <span className={styles.categoryMeta}>Edição Diária • Agosto 2026</span>
        </div>

        <article className={styles.featuredArticle}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
            alt="Destaque Educação"
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Educação do Futuro</span>
            <h2 className={styles.featuredTitle}>
              SESI comemora marca de 1 milhão de alunos capacitados em cursos de tecnologia no Brasil
            </h2>
            <p className={styles.featuredExcerpt}>
              Com investimentos em laboratórios makers e metodologias mão na massa, a instituição consolida-se como referência nacional em educação profissionalizante.
            </p>
            <div className={styles.articleMeta}>
              <span>Por <strong>Renata Guimarães</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </div>
        </article>

        <section className={styles.grid}>
          {eduArticles.map((article) => (
            <div key={article.id} className={styles.card}>
              <img src={article.image} alt={article.title} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{article.tag}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardDesc}>{article.excerpt}</p>
                <div className={styles.articleMeta}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
