import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import styles from "../categorias.module.css";

export default function Economia() {
  const econArticles = [
    {
      id: 1,
      tag: "Política Monetária",
      title: "Copom reduz Selic para 9,5% ao ano e projeta aceleração do crescimento no 2º semestre",
      excerpt: "Decisão unânime do comitê foi motivada pela trajetória controlada da inflação e recuperação fiscal do país.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      date: "13 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 2,
      tag: "Agronegócio",
      title: "Safra recorde de grãos impulsiona superávit da balança comercial brasileira em US$ 8 bilhões",
      excerpt: "Exportações de soja, milho e algodão atingem níveis históricos com forte demanda da Ásia e Europa.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
      date: "12 de Agosto, 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 3,
      tag: "Mercado Financeiro",
      title: "Ibovespa supera 135 mil pontos com forte atração de capital estrangeiro para o Brasil",
      excerpt: "Ações do setor industrial e bancário lideram os ganhos do pregão nesta quinta-feira.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      date: "11 de Agosto, 2026",
      readTime: "3 min de leitura"
    },
    {
      id: 4,
      tag: "Empreendedorismo",
      title: "Micro e pequenas empresas geram 75% dos novos postos de trabalho formais no trimestre",
      excerpt: "Setor de serviços e tecnologia lidera contratações via carteira assinada em todas as regiões.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      date: "10 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 5,
      tag: "Energia Renovável",
      title: "Investimentos em energia solar e eólica no Brasil ultrapassam R$ 100 bilhões",
      excerpt: "Transição energética posiciona o Brasil como um dos principais produtores de hidrogênio verde do mundo.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80",
      date: "09 de Agosto, 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 6,
      tag: "Comércio Exterior",
      title: "Novo acordo comercial entre Mercosul e União Europeia entra em vigor com alíquota zero",
      excerpt: "Medida beneficia mais de 500 produtos industriais e agrícolas do setor produtivo nacional.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
      date: "08 de Agosto, 2026",
      readTime: "5 min de leitura"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Economia & Mercado</h1>
            <p className={styles.categoryMeta}>Caderno de Finanças, Indústria, Comércio e Indicadores</p>
          </div>
          <span className={styles.categoryMeta}>Edição Diária • Agosto 2026</span>
        </div>

        <article className={styles.featuredArticle}>
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
            alt="Destaque Economia"
            className={styles.featuredImage}
          />
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Destaque Econômico</span>
            <h2 className={styles.featuredTitle}>
              Indústria de Transformação registra maior crescimento acumulado dos últimos 5 anos
            </h2>
            <p className={styles.featuredExcerpt}>
              Dados divulgados pelo IBGE mostram expansão impulsionada pela inovação industrial, automação de processos e abertura de novos mercados internacionais.
            </p>
            <div className={styles.articleMeta}>
              <span>Por <strong>Eduardo Mendonça</strong></span>
              <span>•</span>
              <span>13 de Agosto, 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </div>
        </article>

        <section className={styles.grid}>
          {econArticles.map((article) => (
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
