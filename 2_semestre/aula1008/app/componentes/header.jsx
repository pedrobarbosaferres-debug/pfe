import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <header className={styles.headerContainer}>
      {/* Top Bar with metadata */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span className={styles.topBarItem}>📍 São Paulo, SP</span>
          <span>•</span>
          <span className={styles.topBarItem}>🌤️ 22°C</span>
          <span>•</span>
          <span className={styles.topBarItem}>{formattedDate}</span>
        </div>
        <div className={styles.topBarRight}>
          <span className={styles.topBarItem}>USD <strong className={styles.quoteUp}>R$ 5,42 ↑</strong></span>
          <span>|</span>
          <span className={styles.topBarItem}>EUR <strong className={styles.quoteDown}>R$ 5,91 ↓</strong></span>
          <span>|</span>
          <span className={styles.topBarItem}>IBOV <strong className={styles.quoteUp}>134.200 pts</strong></span>
        </div>
      </div>

      {/* Newspaper Masthead */}
      <div className={styles.masthead}>
        <div className={styles.subHeaderInfo}>
          <span>Edição Nº 4.892</span>
          <span>Fundado em 1946</span>
          <span>Preço do Exemplar: R$ 4,50</span>
        </div>

        <h1 className={styles.title}>
          <Link href="/">SESI NEWS</Link>
        </h1>
        <p className={styles.tagline}>"O Verdadeiro Diário de Notícias, Ciência, Tecnologia e Educação da Comunidade"</p>

        <div className={styles.doubleDivider}></div>
      </div>

      {/* Navigation menu */}
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/categorias" className={styles.navLink}>
              Todas As Categorias
            </Link>
          </li>
          <li>
            <Link href="/categorias/esportes" className={styles.navLink}>
              Esportes
            </Link>
          </li>
          <li>
            <Link href="/categorias/tecnologia" className={styles.navLink}>
              Tecnologia
            </Link>
          </li>
          <li>
            <Link href="/categorias/economia" className={styles.navLink}>
              Economia
            </Link>
          </li>
          <li>
            <Link href="/categorias/educacao" className={styles.navLink}>
              Educação
            </Link>
          </li>
          <li>
            <Link href="/categorias/opiniao" className={styles.navLink}>
              Opinião & Artigos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Ticker Bar */}
      <div className={styles.tickerBar}>
        <span className={styles.tickerTag}>Última Hora</span>
        <span className={styles.tickerText}>
          SESI abre 10.000 vagas em cursos gratuitos de Tecnologia e Inovação para o segundo semestre de 2026.
        </span>
      </div>
    </header>
  );
}