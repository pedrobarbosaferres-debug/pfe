'use client';

import { useState, useId } from 'react';
import styles from './page.module.css';

export default function Home() {
  const capitalInputId = useId();
  const aporteInputId = useId();
  const taxaInputId = useId();
  const tempoInputId = useId();

  // Estados dos inputs
  const [capital, setCapital] = useState('5000');
  const [aporte, setAporte] = useState('500');
  const [taxa, setTaxa] = useState('10');
  const [tipoTaxa, setTipoTaxa] = useState('ano'); // 'mes' | 'ano'
  const [tempo, setTempo] = useState('5');
  const [tipoTempo, setTipoTempo] = useState('ano'); // 'mes' | 'ano'

  // Estados da interface
  const [theme, setTheme] = useState('dark');
  const [showTable, setShowTable] = useState(false);
  const [tableMode, setTableMode] = useState('ano'); // 'ano' | 'mes'
  const [toastMessage, setToastMessage] = useState(null);

  // Toggle do Tema
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Funções de formatação monetária e numérica
  const formatBRL = (value) => {
    if (isNaN(value) || value === null || value === undefined) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value) => {
    if (isNaN(value) || value === null || value === undefined) return '0,00';
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Cálculo de Juros Compostos
  const calculateData = () => {
    const C = Math.max(0, parseFloat(capital) || 0);
    const PMT = Math.max(0, parseFloat(aporte) || 0);
    const rawRate = Math.max(0, parseFloat(taxa) || 0);
    const rawTime = Math.max(1, parseInt(tempo, 10) || 1);

    // Converte período para meses
    const totalMonths = tipoTempo === 'ano' ? rawTime * 12 : rawTime;

    // Converte taxa para taxa mensal decimal
    let monthlyRateDecimal = 0;
    if (tipoTaxa === 'ano') {
      // Equivalência de taxa composta: (1 + i_a)^(1/12) - 1
      monthlyRateDecimal = Math.pow(1 + rawRate / 100, 1 / 12) - 1;
    } else {
      monthlyRateDecimal = rawRate / 100;
    }

    const evolution = [];
    let currentBalance = C;
    let currentInvested = C;

    evolution.push({
      month: 0,
      year: 0,
      invested: currentInvested,
      interestTotal: 0,
      interestMonth: 0,
      balance: currentBalance,
    });

    for (let m = 1; m <= totalMonths; m++) {
      const interestThisMonth = currentBalance * monthlyRateDecimal;
      currentBalance = currentBalance + interestThisMonth + PMT;
      currentInvested += PMT;
      const totalInterest = currentBalance - currentInvested;

      evolution.push({
        month: m,
        year: (m / 12).toFixed(1),
        invested: currentInvested,
        interestTotal: totalInterest > 0 ? totalInterest : 0,
        interestMonth: interestThisMonth,
        balance: currentBalance,
      });
    }

    const finalBalance = currentBalance;
    const finalInvested = currentInvested;
    const finalInterest = Math.max(0, finalBalance - finalInvested);
    const percentageProfit = finalInvested > 0 ? (finalInterest / finalInvested) * 100 : 0;

    return {
      totalMonths,
      finalBalance,
      finalInvested,
      finalInterest,
      percentageProfit,
      evolution,
    };
  };

  const results = calculateData();

  // Resetar campos
  const handleReset = () => {
    setCapital('1000');
    setAporte('200');
    setTaxa('10');
    setTipoTaxa('ano');
    setTempo('2');
    setTipoTempo('ano');
    showToast('Valores restaurados para o padrão.');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Copiar relatório
  const handleCopySummary = () => {
    const text = `📊 Simulação de Juros Compostos
------------------------------------
• Capital Inicial: ${formatBRL(parseFloat(capital) || 0)}
• Aporte Mensal: ${formatBRL(parseFloat(aporte) || 0)}
• Taxa de Juros: ${taxa}% ${tipoTaxa === 'ano' ? 'ao ano' : 'ao mês'}
• Período: ${tempo} ${tipoTempo === 'ano' ? (tempo === '1' ? 'ano' : 'anos') : 'meses'}
------------------------------------
💰 Montante Final: ${formatBRL(results.finalBalance)}
💵 Total Investido: ${formatBRL(results.finalInvested)}
📈 Total em Juros: ${formatBRL(results.finalInterest)} (+${formatNumber(results.percentageProfit)}%)
------------------------------------
Simulado via Calculadora Minimalista`;

    navigator.clipboard.writeText(text);
    showToast('✓ Resumo copiado para a área de transferência!');
  };

  // Gráfico SVG
  const points = results.evolution;
  const maxBalance = Math.max(...points.map((p) => p.balance), 1);
  const svgWidth = 400;
  const svgHeight = 110;
  const padding = 10;

  const getCoordinates = (index, value) => {
    const x = padding + (index / (points.length - 1 || 1)) * (svgWidth - padding * 2);
    const y = svgHeight - padding - (value / maxBalance) * (svgHeight - padding * 2);
    return { x, y };
  };

  const balancePathData = points
    .map((p, idx) => {
      const { x, y } = getCoordinates(idx, p.balance);
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const investedPathData = points
    .map((p, idx) => {
      const { x, y } = getCoordinates(idx, p.invested);
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const areaBalancePathData = `${balancePathData} L ${getCoordinates(points.length - 1, 0).x} ${svgHeight - padding} L ${getCoordinates(0, 0).x} ${svgHeight - padding} Z`;

  // Dados da tabela agrupados por ano ou mês
  const tableData =
    tableMode === 'ano'
      ? results.evolution.filter((p) => p.month % 12 === 0 || p.month === results.totalMonths)
      : results.evolution;

  // Porcentagem para a barra de proporção
  const investedPercent = results.finalBalance > 0 ? (results.finalInvested / results.finalBalance) * 100 : 100;
  const interestPercent = 100 - investedPercent;

  return (
    <div className={styles.wrapper}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Header / Navegação */}
        <header className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>%</div>
            <div className={styles.brandText}>
              <h1>Juros Compostos</h1>
              <p>Simulador financeiro minimalista</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button
              onClick={handleReset}
              className={styles.headerBtn}
              title="Redefinir campos"
            >
              ↺ Limpar
            </button>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              title="Alternar tema"
              aria-label="Alternar tema claro/escuro"
            >
              {theme === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Efeito exponencial
          </div>
          <h2 className={styles.heroTitle}>
            Veja seu patrimônio crescer com <span className={styles.heroTitleGradient}>juros compostos</span>
          </h2>
          <p className={styles.subtitle}>
            Ajuste os valores e acompanhe em tempo real a evolução do montante, aportes e rendimento.
          </p>
        </section>

        {/* Grid Principal: Formulário + Painel de Resultados */}
        <main className={styles.calculatorGrid}>
          {/* Card de Entradas */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleIcon}>⚙</span> Parâmetros da Simulação
              </h3>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              {/* Capital Inicial */}
              <div className={styles.inputGroup}>
                <div className={styles.inputHeader}>
                  <label htmlFor={capitalInputId} className={styles.label}>Capital Inicial</label>
                </div>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputPrefix}>R$</span>
                  <input
                    id={capitalInputId}
                    type="number"
                    min="0"
                    step="100"
                    className={styles.input}
                    placeholder="0,00"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                  />
                </div>
                <div className={styles.presets}>
                  {[1000, 5000, 10000, 50000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={styles.presetBtn}
                      onClick={() => setCapital(val.toString())}
                    >
                      +{val >= 1000 ? `${val / 1000}k` : val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aporte Mensal */}
              <div className={styles.inputGroup}>
                <div className={styles.inputHeader}>
                  <label htmlFor={aporteInputId} className={styles.label}>Aporte Mensal (recorrente)</label>
                </div>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputPrefix}>R$</span>
                  <input
                    id={aporteInputId}
                    type="number"
                    min="0"
                    step="50"
                    className={styles.input}
                    placeholder="0,00"
                    value={aporte}
                    onChange={(e) => setAporte(e.target.value)}
                  />
                </div>
                <div className={styles.presets}>
                  {[0, 200, 500, 1000, 2000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={styles.presetBtn}
                      onClick={() => setAporte(val.toString())}
                    >
                      {val === 0 ? 'Sem aporte' : `R$ ${val}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Linha Dupla: Taxa de Juros e Período */}
              <div className={styles.dualRow}>
                {/* Taxa de Juros */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputHeader}>
                    <label htmlFor={taxaInputId} className={styles.label}>Taxa de Juros</label>
                    <div className={styles.typeToggle}>
                      <button
                        type="button"
                        className={`${styles.typeToggleBtn} ${tipoTaxa === 'ano' ? styles.typeToggleBtnActive : ''}`}
                        onClick={() => setTipoTaxa('ano')}
                      >
                        % a.a.
                      </button>
                      <button
                        type="button"
                        className={`${styles.typeToggleBtn} ${tipoTaxa === 'mes' ? styles.typeToggleBtnActive : ''}`}
                        onClick={() => setTipoTaxa('mes')}
                      >
                        % a.m.
                      </button>
                    </div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      id={taxaInputId}
                      type="number"
                      min="0"
                      step="0.1"
                      className={styles.input}
                      placeholder="0.0"
                      value={taxa}
                      onChange={(e) => setTaxa(e.target.value)}
                    />
                    <span className={styles.inputSuffix}>%</span>
                  </div>
                  <div className={styles.presets}>
                    {tipoTaxa === 'ano' ? (
                      <>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('6')}>6% (Poupança)</button>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('10')}>10% (Tesouro)</button>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('12')}>12% (CDI)</button>
                      </>
                    ) : (
                      <>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('0.5')}>0.5% a.m.</button>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('1.0')}>1.0% a.m.</button>
                        <button type="button" className={styles.presetBtn} onClick={() => setTaxa('1.5')}>1.5% a.m.</button>
                      </>
                    )}
                  </div>
                </div>

                {/* Período de Aplicação */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputHeader}>
                    <label htmlFor={tempoInputId} className={styles.label}>Período</label>
                    <div className={styles.typeToggle}>
                      <button
                        type="button"
                        className={`${styles.typeToggleBtn} ${tipoTempo === 'ano' ? styles.typeToggleBtnActive : ''}`}
                        onClick={() => setTipoTempo('ano')}
                      >
                        Anos
                      </button>
                      <button
                        type="button"
                        className={`${styles.typeToggleBtn} ${tipoTempo === 'mes' ? styles.typeToggleBtnActive : ''}`}
                        onClick={() => setTipoTempo('mes')}
                      >
                        Meses
                      </button>
                    </div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      id={tempoInputId}
                      type="number"
                      min="1"
                      step="1"
                      className={styles.input}
                      placeholder="0"
                      value={tempo}
                      onChange={(e) => setTempo(e.target.value)}
                    />
                    <span className={styles.inputSuffix}>{tipoTempo === 'ano' ? 'anos' : 'meses'}</span>
                  </div>
                  <div className={styles.presets}>
                    {tipoTempo === 'ano' ? (
                      [1, 3, 5, 10, 20].map((y) => (
                        <button
                          key={y}
                          type="button"
                          className={styles.presetBtn}
                          onClick={() => setTempo(y.toString())}
                        >
                          {y} {y === 1 ? 'ano' : 'anos'}
                        </button>
                      ))
                    ) : (
                      [6, 12, 24, 36, 60].map((m) => (
                        <button
                          key={m}
                          type="button"
                          className={styles.presetBtn}
                          onClick={() => setTempo(m.toString())}
                        >
                          {m}m
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </form>
          </section>

          {/* Card de Resultados */}
          <section className={`${styles.card} ${styles.resultsPanel}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleIcon}>✦</span> Resultado da Simulação
              </h3>
            </div>

            {/* Destaque do Montante Final */}
            <div className={styles.primaryResultCard}>
              <p className={styles.resultLabel}>Montante Final Acumulado</p>
              <div className={styles.totalAmount}>
                {formatBRL(results.finalBalance)}
              </div>

              {/* Cards Secundários */}
              <div className={styles.resultStatsGrid}>
                <div className={styles.statItem}>
                  <p className={styles.statLabel}>Total Investido</p>
                  <p className={styles.statValue}>{formatBRL(results.finalInvested)}</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statLabel}>Total em Juros</p>
                  <p className={`${styles.statValue} ${styles.statValueGreen}`}>
                    +{formatBRL(results.finalInterest)}
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de Proporção: Investido vs Juros */}
            <div className={styles.barContainer}>
              <div className={styles.barLabelWrapper}>
                <span>Composição do Patrimônio</span>
                <span>Rendimento: <strong>+{formatNumber(results.percentageProfit)}%</strong></span>
              </div>
              <div className={styles.barTrack} title={`Investido: ${investedPercent.toFixed(1)}% | Juros: ${interestPercent.toFixed(1)}%`}>
                <div className={styles.barInvested} style={{ width: `${investedPercent}%` }} />
                <div className={styles.barInterest} style={{ width: `${interestPercent}%` }} />
              </div>
              <div className={styles.barLegend}>
                <span><span className={`${styles.legendDot} ${styles.legendInvested}`} /> Investido ({investedPercent.toFixed(1)}%)</span>
                <span><span className={`${styles.legendDot} ${styles.legendInterest}`} /> Juros ({interestPercent.toFixed(1)}%)</span>
              </div>
            </div>

            {/* Gráfico de Evolução SVG */}
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <span className={styles.chartTitle}>Curva de Crescimento</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                  {results.totalMonths} meses ({ (results.totalMonths / 12).toFixed(1) } anos)
                </span>
              </div>
              <svg className={styles.chartSvg} viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-emerald)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--accent-emerald)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Linha de base */}
                <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="var(--border-subtle)" strokeWidth="1" />
                
                {/* Área preenchida do montante */}
                <path d={areaBalancePathData} fill="url(#areaGrad)" />
                
                {/* Linha do Investido */}
                <path d={investedPathData} fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                
                {/* Linha do Montante */}
                <path d={balancePathData} fill="none" stroke="var(--accent-emerald)" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Botão de Cópia e Toggle de Tabela */}
            <div className={styles.actionBtns}>
              <button
                type="button"
                onClick={handleCopySummary}
                className={styles.copyBtn}
              >
                📋 Copiar Resumo
              </button>
              <button
                type="button"
                onClick={() => setShowTable(!showTable)}
                className={styles.tableToggleBtn}
                style={{ flex: 1 }}
              >
                {showTable ? 'Ocultar Detalhes ▴' : 'Ver Evolução Detalhada ▾'}
              </button>
            </div>

            {/* Tabela de Evolução Expansível */}
            {showTable && (
              <div className={styles.tableContainer}>
                <div style={{ padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Detalhamento Periódico</span>
                  <div className={styles.typeToggle}>
                    <button
                      type="button"
                      className={`${styles.typeToggleBtn} ${tableMode === 'ano' ? styles.typeToggleBtnActive : ''}`}
                      onClick={() => setTableMode('ano')}
                    >
                      Por Ano
                    </button>
                    <button
                      type="button"
                      className={`${styles.typeToggleBtn} ${tableMode === 'mes' ? styles.typeToggleBtnActive : ''}`}
                      onClick={() => setTableMode('mes')}
                    >
                      Por Mês
                    </button>
                  </div>
                </div>
                <table className={styles.evolutionTable}>
                  <thead>
                    <tr>
                      <th>{tableMode === 'ano' ? 'Ano' : 'Mês'}</th>
                      <th>Investido</th>
                      <th>Juros Acum.</th>
                      <th>Montante</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, idx) => (
                      <tr key={idx}>
                        <td>{tableMode === 'ano' ? `${(item.month / 12).toFixed(item.month % 12 === 0 ? 0 : 1)}º ano` : `${item.month}º mês`}</td>
                        <td>{formatBRL(item.invested)}</td>
                        <td style={{ color: 'var(--accent-emerald)' }}>+{formatBRL(item.interestTotal)}</td>
                        <td><strong>{formatBRL(item.balance)}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>

        {/* Rodapé com Fórmula Matemática */}
        <footer className={styles.formulaCard}>
          <div>
            Fórmula dos Juros Compostos:
          </div>
          <div className={styles.formulaMath}>
            M = C × (1 + i)ᵗ + PMT × [((1 + i)ᵗ - 1) / i]
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
            M: Montante • C: Capital Inicial • i: Taxa • t: Período • PMT: Aporte Mensal
          </div>
        </footer>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
