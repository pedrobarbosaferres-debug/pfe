import Link from "next/link";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
import styles from "./categorias.module.css";

export default function Categorias() {
  const categoriesList = [
    {
      id: "esportes",
      title: "Esportes",
      icon: "⚽",
      desc: "Cobertura completa de Futebol, Vôlei, Basquete, F1, Atletismo e Olimpíadas Estudantis.",
      link: "/categorias/esportes",
      count: "24 Matérias"
    },
    {
      id: "tecnologia",
      title: "Tecnologia",
      icon: "💻",
      desc: "Inteligência Artificial, Robótica, Espaço, Cibersegurança e Inovação Industrial.",
      link: "/categorias/tecnologia",
      count: "18 Matérias"
    },
    {
      id: "economia",
      title: "Economia",
      icon: "📈",
      desc: "Mercado Financeiro, Selic, Dólar, Agronegócio, Indústria e Empreendedorismo.",
      link: "/categorias/economia",
      count: "30 Matérias"
    },
    {
      id: "educacao",
      title: "Educação",
      icon: "🎓",
      desc: "Cursos SESI/SENAI, Bolsas de Estudo, ENEM, Pedagogia Moderna e Intercâmbio.",
      link: "/categorias/educacao",
      count: "15 Matérias"
    },
    {
      id: "opiniao",
      title: "Opinião & Artigos",
      icon: "✍️",
      desc: "Colunas exclusivas, editoriais de especialistas e debates sobre os rumos do país.",
      link: "/categorias/opiniao",
      count: "12 Matérias"
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.categoryHeader}>
          <div>
            <h1 className={styles.categoryTitle}>Todas As Categorias</h1>
            <p className={styles.categoryMeta}>Índice dos Cadernos Editoriais do SESI NEWS</p>
          </div>
          <span className={styles.categoryMeta}>Edição Agosto 2026</span>
        </div>

        {/* Category Cards Overview */}
        <section className={styles.categoriesOverview}>
          {categoriesList.map((cat) => (
            <div key={cat.id} className={styles.categoryNavBox}>
              <div className={styles.categoryIcon}>{cat.icon}</div>
              <h2 className={styles.categoryNavTitle}>{cat.title}</h2>
              <p className={styles.categoryNavDesc}>{cat.desc}</p>
              <Link href={cat.link} className={styles.categoryButton}>
                Explorar {cat.title} →
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}