'use client';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Buscar Endereço via CEP</h1>
        </header>
    );
}