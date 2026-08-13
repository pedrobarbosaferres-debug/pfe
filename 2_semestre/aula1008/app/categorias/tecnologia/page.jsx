import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import styles from "../categorias.module.css";

export default function Tecnologia() {
  const techArticles = [
    {
      id: 1,
      tag: "Inteligência Artificial",
      title: "Modelos de linguagem quântica alcançam precisão inédita no diagnóstico médico precoce",
      excerpt: "Pesquisadores internacionais e brasileiros desenvolvem algoritmo capaz de detectar anomalias celulares anos antes dos sintomas.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      date: "13 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 2,
      tag: "Robótica & Automação",
      title: "Indústria 5.0: Robôs colaborativos transformam linhas de produção no estado de São Paulo",
      excerpt: "Brazos robóticos inteligentes trabalham lado a lado com operadores humanos aumentando a produtividade em 35%.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      date: "12 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 3,
      tag: "Exploração Espacial",
      title: "Missão conjunta à Lua confirma presença de água congelada em crateras do polo sul",
      excerpt: "Sondas espaciais recolheram amostras do solo lunar que servirão de base para a futura estação habitável permanente.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      date: "11 de Agosto, 2026",
      readTime: "6 min de leitura"
    },
    {
      id: 4,
      tag: "Cibersegurança",
      title: "Criptografia pós-quântica torna-se padrão obrigatório para transações financeiras digitais",
      excerpt: "Novos protocolos digitais garantem imunidade contra ataques de computação de alta velocidade.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      date: "10 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 5,
      tag: "Semicondutores",
      title: "Brasil inaugura primeira fábrica de chips de 2 nanômetros para a América Latina",
      excerpt: "Iniciativa posiciona o país como polo estratégico na cadeia global de suprimentos de semicondutores.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      date: "09 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 6,
      tag: "Realidade Aumentada",
      title: "Óculos de realidade mista substituem monitores tradicionais em escritórios de tecnologia",
      excerpt: "Dispositivos ultraleves permitem ambientes virtuais multiplas telas em 3D com controle gestual.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
      date: "08 de Agosto, 2026",
      readTime: "3 min de leitura"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Tecnologia & Inovação</h1>
            <p className={styles.categoryMeta}>Caderno de Ciência, Inteligência Artificial e Futuro Digital</p>
          </div>
          <span className={styles.categoryMeta}>Edição Diária • Agosto 2026</span>
        </div>

        <article className={styles.featuredArticle}>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Destaque Tecnologia"
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Manchete Tech</span>
            <h2 className={styles.featuredTitle}>
              SESI e SENAI lançam programa de capacitação em IA Generativa para 50 mil alunos
            </h2>
            <p className={styles.featuredExcerpt}>
              A parceria estratégica visa formar a nova geração de profissionais de tecnologia com foco em ética, desenvolvimento de modelos avançados e aplicação industrial prática.
            </p>
            <div className={styles.articleMeta}>
              <span>Por <strong>Luciana Barbosa</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </div>
        </article>

        <section className={styles.grid}>
          {techArticles.map((article) => (
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
