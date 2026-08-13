import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Brand info */}
        <div className={styles.brandColumn}>
          <h2>SESI NEWS</h2>
          <p>
            O portal de jornalismo independente comprometido com a verdade, a educação, a inovação tecnológica e o desenvolvimento social.
          </p>
        </div>

        {/* Editoriais */}
        <div>
          <h3 className={styles.columnTitle}>Editoriais</h3>
          <ul className={styles.linkList}>
            <li><Link href="/categorias">Brasil & Política</Link></li>
            <li><Link href="/categorias">Economia & Mercado</Link></li>
            <li><Link href="/categorias/esportes">Esportes & Saúde</Link></li>
            <li><Link href="/categorias">Tecnologia & Ciência</Link></li>
            <li><Link href="/categorias">Educação SESI / SENAI</Link></li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className={styles.columnTitle}>Institucional</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Sobre o SESI News</a></li>
            <li><a href="#">Expediente & Redação</a></li>
            <li><a href="#">Código de Ética</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
            <li><a href="#">Anuncie Conosco</a></li>
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <h3 className={styles.columnTitle}>Atendimento</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Assinatura Digital</a></li>
            <li><a href="#">SAC & Central de Ajuda</a></li>
            <li><a href="#">Fale com a Redação</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © 2026 SESI NEWS - Todos os direitos reservados. Imprensa Oficial e Digital.
        </p>
        <p>Desenvolvido com Next.js & React</p>
      </div>
    </footer>
  );
}