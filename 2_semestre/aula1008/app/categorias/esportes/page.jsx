import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import styles from "../categorias.module.css";

export default function Esportes() {
  const esportesArticles = [
    {
      id: 1,
      tag: "Futebol Profissional",
      title: "Brasil vence a Argentina nos acréscimos e lidera as eliminatórias do Sul-Americano",
      excerpt: "Com gol decisivo aos 93 minutos, a seleção brasileira garantiu os três pontos em partida histórica no Maracanã lotado.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
      date: "13 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 2,
      tag: "Vôlei Feminino",
      title: "Seleção Brasileira bate a Itália por 3 a 0 e vai à final do Grand Prix Mundial",
      excerpt: "Equipe comandada por Zé Roberto Guimarães fez exibição impecável no sistema defensivo e no ataque pelas pontas.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80",
      date: "12 de Agosto, 2026",
      readTime: "3 min de leitura"
    },
    {
      id: 3,
      tag: "Robótica Esportiva",
      title: "Alunos do SESI vencem Campeonato de Robótica de Competição na Categoria SUMÔ",
      excerpt: "Robô autônomo desenhado e programado por estudantes de ensino médio conquistou o troféu invicto.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      date: "11 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 4,
      tag: "Fórmula 1",
      title: "GP de Interlagos confirma público recorde e anuncia ingressos esgotados para 2026",
      excerpt: "Mais de 250 mil torcedores são esperados no autódromo paulistano para o final de semana de corridas.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
      date: "10 de Agosto, 2026",
      readTime: "3 min de leitura"
    },
    {
      id: 5,
      tag: "Basquete NBA",
      title: "Temporada de basquete inicia com recorde de pontos e novos talentos brasileiros",
      excerpt: "Promessa nacional estreia com 24 pontos na vitória fora de casa e arranca elogios dos especialistas.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
      date: "09 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 6,
      tag: "Atletismo",
      title: "Corredor brasileiro conquista o ouro nos 100m rasos em torneio Sul-Americano",
      excerpt: "Atleta cravou a marca de 9,98 segundos e igualou o recorde continental na prova mais rápida do atletismo.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
      date: "08 de Agosto, 2026",
      readTime: "3 min de leitura"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        {/* Category Header */}
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Esportes</h1>
            <p className={styles.categoryMeta}>Caderno de Cobertura Esportiva & Competições</p>
          </div>
          <span className={styles.categoryMeta}>Edição Atualizada • Agosto 2026</span>
        </div>

        {/* Featured Article */}
        <article className={styles.featuredArticle}>
          <img
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
            alt="Destaque Esportes"
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Destaque da Semana</span>
            <h2 className={styles.featuredTitle}>
              Olimpíadas Estudantis do SESI reúnem 15.000 jovens atletas em competição estadual
            </h2>
            <p className={styles.featuredExcerpt}>
              A cerimônia de abertura em São Paulo contou com acendimento da pira olímpica, desfile de delegações e disputas em mais de 12 modalidades esportivas individuais e coletivas.
            </p>
            <div className={styles.articleMeta}>
              <span>Por <strong>Redação Esportiva</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>6 min de leitura</span>
            </div>
          </div>
        </article>

        {/* News Grid */}
        <section className={styles.grid}>
          {esportesArticles.map((article) => (
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