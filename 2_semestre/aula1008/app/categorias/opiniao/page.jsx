import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import styles from "../categorias.module.css";

export default function Opiniao() {
  const opiniaoArticles = [
    {
      id: 1,
      tag: "Artigo de Opinião",
      title: "Por que o Brasil precisa liderar a revolução das energias renováveis e da economia verde",
      excerpt: "O potencial solar e eólico nacional é a chave para o desenvolvimento sustentável com geração de empregos qualificados.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      author: "Dr. Roberto Alencar",
      date: "13 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 2,
      tag: "Editorial",
      title: "A ética na inteligência artificial não é luxo, é sobrevivência democrática",
      excerpt: "Regulamentar algoritmos e promover a transparência nos modelos generativos deve ser prioridade máxima dos governos.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      author: "Dra. Mariana Mendes",
      date: "12 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 3,
      tag: "Colunista Convidado",
      title: "O futuro do trabalho não é sobre substituir humanos, mas potencializar talentos",
      excerpt: "Competências socioemocionais, criatividade e pensamento crítico serão as habilidades mais valiosas das próximas décadas.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      author: "Fernando Castro",
      date: "11 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 4,
      tag: "Análise Econômica",
      title: "Descentralização do conhecimento: O impacto dos polos tecnológicos regionais",
      excerpt: "Levar hubs de inovação para fora das metrópoles impulsiona a economia local e retém talentos no interior.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      author: "Prof. Henrique Viana",
      date: "10 de Agosto, 2026",
      readTime: "6 min de leitura"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Opinião & Artigos</h1>
            <p className={styles.categoryMeta}>Espaço de Debate, Colunistas e Visões sobre o Futuro</p>
          </div>
          <span className={styles.categoryMeta}>Edição Diária • Agosto 2026</span>
        </div>

        <article className={styles.featuredArticle}>
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
            alt="Destaque Opinião"
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Editorial em Destaque</span>
            <h2 className={styles.featuredTitle}>
              "A Educação Pública como Pilar Indispensável de Soberania Tecnológica Nacional"
            </h2>
            <p className={styles.featuredExcerpt}>
              Não há país forte sem cientistas bem formados e escolas equipadas. Investir na juventude é a única estratégia duradoura para o progresso social e econômico do Brasil.
            </p>
            <div className={styles.articleMeta}>
              <span>Por <strong>Conselho Editorial SESI News</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>6 min de leitura</span>
            </div>
          </div>
        </article>

        <section className={styles.grid}>
          {opiniaoArticles.map((article) => (
            <div key={article.id} className={styles.card}>
              <img src={article.image} alt={article.title} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{article.tag}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardDesc}>{article.excerpt}</p>
                <div className={styles.articleMeta}>
                  <span>Por <strong>{article.author}</strong></span>
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
