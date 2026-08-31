'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Barra Institucional Superior */}
      <div className="topbar-institutional">
        <div className="topbar-container">
          <div className="topbar-brands">
            <span className="topbar-brand-item">FIESP</span>
            <span className="topbar-divider">|</span>
            <span className="topbar-brand-item">CIESP</span>
            <span className="topbar-divider">|</span>
            <span className="topbar-brand-item" style={{ color: '#FFA4A9', fontWeight: 800 }}>SESI</span>
            <span className="topbar-divider">|</span>
            <span className="topbar-brand-item" style={{ color: '#FFA4A9', fontWeight: 800 }}>SENAI</span>
            <span className="topbar-divider">|</span>
            <span className="topbar-brand-item">IRS</span>
            <span className="topbar-unit">Centro Educacional Mirandópolis</span>
          </div>
          <div className="topbar-links">
            <a href="tel:0800551000" className="topbar-link">Atendimento: 0800 55 1000</a>
            <span className="topbar-divider">|</span>
            <Link href="/" className="topbar-link">Portal do Aluno</Link>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="header-main">
        <div className="header-container">
          {/* Logo e Nome */}
          <Link href="/" className="brand-logo-wrap">
            <div className="logo-sesi-senai">
              <span>SESI</span>
              <span className="logo-divider">/</span>
              <span>SENAI</span>
            </div>
            <div className="brand-text-group">
              <span className="brand-title">Sistema Escolar</span>
              <span className="brand-subtitle">Educação e Tecnologia</span>
            </div>
          </Link>

          {/* Menu de Navegação */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <Link 
                  href="/" 
                  className={`nav-item-link ${pathname === '/' ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/cadaaluno" 
                  className={`nav-item-link ${pathname === '/cadaaluno' ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <line x1="19" y1="8" x2="19" y2="14"/>
                    <line x1="22" y1="11" x2="16" y2="11"/>
                  </svg>
                  Cadastrar Aluno
                </Link>
              </li>
              <li>
                <Link 
                  href="/listaluno" 
                  className={`nav-item-link ${pathname === '/listaluno' ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Lista de Alunos
                </Link>
              </li>
              <li>
                <Link 
                  href="/notaluno" 
                  className={`nav-item-link ${pathname === '/notaluno' ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  Lançar Notas
                </Link>
              </li>
              <li>
                <Link 
                  href="/listanota" 
                  className={`nav-item-link ${pathname === '/listanota' ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  Boletins & Notas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão de Acesso / Perfil */}
          <div className="header-user-action">
            <button className="btn-user-portal" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Área do Docente</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}