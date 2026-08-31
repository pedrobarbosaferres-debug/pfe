import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-institutional">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-title">SESI / SENAI SP</div>
            <p className="footer-brand-desc">
              Centro Educacional SESI & Escola SENAI de Mirandópolis. Promovendo a educação de excelência, formação profissional e inovação para o futuro do trabalho e da indústria.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
              <span className="badge badge-danger">Unidade Mirandópolis</span>
              <span className="badge badge-info">SP</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Gestão Acadêmica</h4>
            <div className="footer-links">
              <Link href="/cadaaluno" className="footer-link">Cadastrar Novo Aluno</Link>
              <Link href="/listaluno" className="footer-link">Consulta de Alunos</Link>
              <Link href="/notaluno" className="footer-link">Lançamento de Avaliações</Link>
              <Link href="/listanota" className="footer-link">Boletins e Relatórios</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Links Úteis</h4>
            <div className="footer-links">
              <a href="https://www.sp.senai.br" target="_blank" rel="noreferrer" className="footer-link">Portal SENAI-SP</a>
              <a href="https://www.sesisp.org.br" target="_blank" rel="noreferrer" className="footer-link">Portal SESI-SP</a>
              <a href="https://www.fiesp.com.br" target="_blank" rel="noreferrer" className="footer-link">FIESP / CIESP</a>
              <a href="#" className="footer-link">Calendário Letivo 2026</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Atendimento</h4>
            <div className="footer-links">
              <span style={{ color: '#CBD5E1', fontSize: '0.82rem' }}>📞 (18) 3701-4000</span>
              <span style={{ color: '#CBD5E1', fontSize: '0.82rem' }}>✉️ atendimento@sesisenai.org.br</span>
              <span style={{ color: '#CBD5E1', fontSize: '0.82rem' }}>📍 Mirandópolis - Estado de São Paulo</span>
              <span style={{ color: '#94A3B8', fontSize: '0.78rem', marginTop: '6px' }}>Segunda a Sexta: 07h às 21h</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SESI-SP e SENAI-SP - Serviço Social da Indústria & Serviço Nacional de Aprendizagem Industrial. Todos os direitos reservados.</p>
          <p>Sistema de Gestão Escolar v2.4 • Projeto Fullstack</p>
        </div>
      </div>
    </footer>
  );
}
