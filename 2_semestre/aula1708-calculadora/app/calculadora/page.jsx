'use client';
import { useState } from "react";
import Header from "../componentes/header";
import styles from "./calculadora.module.css";

export function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('+');
    const [activeInput, setActiveInput] = useState('n1'); // 'n1' or 'n2'
    const [history, setHistory] = useState([]);
    const [expression, setExpression] = useState('');

    function somar(val1, val2) {
        const res = Number(val1) + Number(val2);
        setResult(res);
        setOperation('+');
        const expr = `${val1} + ${val2} =`;
        setExpression(expr);
        addToHistory(val1, '+', val2, res);
    }

    function subtrair(val1, val2) {
        const res = Number(val1) - Number(val2);
        setResult(res);
        setOperation('-');
        const expr = `${val1} - ${val2} =`;
        setExpression(expr);
        addToHistory(val1, '-', val2, res);
    }

    function multiplicar(val1, val2) {
        const res = Number(val1) * Number(val2);
        setResult(res);
        setOperation('×');
        const expr = `${val1} × ${val2} =`;
        setExpression(expr);
        addToHistory(val1, '×', val2, res);
    }

    function dividir(val1, val2) {
        const num2 = Number(val2);
        if (num2 === 0) {
            setResult('Erro');
            setExpression(`${val1} ÷ 0 =`);
            return;
        }
        const res = Number(val1) / num2;
        const rounded = Number.isInteger(res) ? res : parseFloat(res.toFixed(6));
        setResult(rounded);
        setOperation('÷');
        const expr = `${val1} ÷ ${val2} =`;
        setExpression(expr);
        addToHistory(val1, '÷', val2, rounded);
    }

    function addToHistory(num1, op, num2, res) {
        const newItem = `${num1} ${op} ${num2} = ${res}`;
        setHistory(prev => [newItem, ...prev.slice(0, 4)]);
    }

    function calculateResult() {
        if (operation === '+') somar(n1, n2);
        else if (operation === '-') subtrair(n1, n2);
        else if (operation === '×' || operation === '*') multiplicar(n1, n2);
        else if (operation === '÷' || operation === '/') dividir(n1, n2);
    }

    function handleKeyPress(key) {
        if (key === 'AC') {
            setN1(0);
            setN2(0);
            setResult(0);
            setExpression('');
            return;
        }

        if (key === 'DEL') {
            if (activeInput === 'n1') {
                const str = String(n1);
                setN1(str.length > 1 ? str.slice(0, -1) : 0);
            } else {
                const str = String(n2);
                setN2(str.length > 1 ? str.slice(0, -1) : 0);
            }
            return;
        }

        if (key === '=') {
            calculateResult();
            return;
        }

        if (['+', '-', '×', '÷'].includes(key)) {
            setOperation(key);
            if (key === '+') somar(n1, n2);
            else if (key === '-') subtrair(n1, n2);
            else if (key === '×') multiplicar(n1, n2);
            else if (key === '÷') dividir(n1, n2);
            return;
        }

        // Numeric or decimal input
        const currentVal = String(activeInput === 'n1' ? n1 : n2);
        let newVal;
        if (currentVal === '0' || currentVal === 0) {
            newVal = key === '.' ? '0.' : key;
        } else {
            if (key === '.' && currentVal.includes('.')) return;
            newVal = currentVal + key;
        }

        if (activeInput === 'n1') {
            setN1(newVal);
        } else {
            setN2(newVal);
        }
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.calcChassis}>
                    {/* Top Solar Panel & Branding */}
                    <div className={styles.topBar}>
                        <span className={styles.brandLabel}>SENAI FX-991</span>
                        <div className={styles.solarPanel}>
                            <div className={styles.solarLine}></div>
                            <div className={styles.solarLine}></div>
                        </div>
                    </div>

                    {/* LCD Screen Display */}
                    <div className={styles.displayScreen}>
                        <div className={styles.expressionText}>
                            {expression || `${n1} ${operation} ${n2}`}
                        </div>
                        <div className={styles.mainValue}>
                            <span>{result !== undefined && result !== null ? result : 0}</span>
                        </div>
                    </div>

                    {/* Form Inputs Section */}
                    <div className={styles.inputsContainer}>
                        <div 
                            className={styles.inputGroup} 
                            onClick={() => setActiveInput('n1')}
                        >
                            <label htmlFor="n1" className={styles.inputLabel}>
                                {activeInput === 'n1' && <span className={styles.inputActiveDot} />}
                                Digite um número (1):
                            </label>
                            <input 
                                type="number" 
                                id="n1" 
                                value={n1}
                                onFocus={() => setActiveInput('n1')}
                                onChange={(e) => setN1(e.target.value)} 
                                className={styles.numInput}
                            />  
                        </div>
                        
                        <div 
                            className={styles.inputGroup} 
                            onClick={() => setActiveInput('n2')}
                        >
                            <label htmlFor="n2" className={styles.inputLabel}>
                                {activeInput === 'n2' && <span className={styles.inputActiveDot} />}
                                Digite um número (2):
                            </label>
                            <input 
                                type="number" 
                                id="n2" 
                                value={n2}
                                onFocus={() => setActiveInput('n2')}
                                onChange={(e) => setN2(e.target.value)} 
                                className={styles.numInput}
                            />  
                        </div>

                        {/* Operation Selection Bar */}
                        <div className={styles.operationsRow}>
                            <button 
                                className={`${styles.opBtn} ${operation === '+' ? styles.opBtnActive : ''}`}
                                onClick={() => somar(n1, n2)}
                            >
                                +
                            </button>
                            <button 
                                className={`${styles.opBtn} ${operation === '-' ? styles.opBtnActive : ''}`}
                                onClick={() => subtrair(n1, n2)}
                            >
                                -
                            </button>
                            <button 
                                className={`${styles.opBtn} ${operation === '×' ? styles.opBtnActive : ''}`}
                                onClick={() => multiplicar(n1, n2)}
                            >
                                ×
                            </button>
                            <button 
                                className={`${styles.opBtn} ${operation === '÷' ? styles.opBtnActive : ''}`}
                                onClick={() => dividir(n1, n2)}
                            >
                                ÷
                            </button>
                        </div>
                    </div>

                    {/* Interactive Keypad Grid */}
                    <div className={styles.keypadGrid}>
                        <button className={`${styles.keyBtn} ${styles.fnKey}`} onClick={() => handleKeyPress('AC')}>AC</button>
                        <button className={`${styles.keyBtn} ${styles.fnKey}`} onClick={() => handleKeyPress('DEL')}>DEL</button>
                        <button className={`${styles.keyBtn} ${styles.fnKey}`} onClick={() => handleKeyPress('%')}>%</button>
                        <button className={`${styles.keyBtn} ${styles.actionKey}`} onClick={() => handleKeyPress('÷')}>÷</button>

                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('7')}>7</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('8')}>8</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('9')}>9</button>
                        <button className={`${styles.keyBtn} ${styles.actionKey}`} onClick={() => handleKeyPress('×')}>×</button>

                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('4')}>4</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('5')}>5</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('6')}>6</button>
                        <button className={`${styles.keyBtn} ${styles.actionKey}`} onClick={() => handleKeyPress('-')}>-</button>

                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('1')}>1</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('2')}>2</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('3')}>3</button>
                        <button className={`${styles.keyBtn} ${styles.actionKey}`} onClick={() => handleKeyPress('+')}>+</button>

                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('0')}>0</button>
                        <button className={`${styles.keyBtn} ${styles.numKey}`} onClick={() => handleKeyPress('.')}>.</button>
                        <button className={`${styles.keyBtn} ${styles.equalKey}`} onClick={() => handleKeyPress('=')}>=</button>
                    </div>
                </div>

                {/* Calculation History */}
                {history.length > 0 && (
                    <div className={styles.historyContainer}>
                        <div className={styles.historyTitle}>
                            <span>Histórico de Cálculos</span>
                            <button 
                                onClick={() => setHistory([])} 
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.75rem' }}
                            >
                                Limpar
                            </button>
                        </div>
                        <div className={styles.historyList}>
                            {history.map((item, idx) => (
                                <div key={idx} className={styles.historyItem}>
                                    <span>{item.split('=')[0]} =</span>
                                    <span className={styles.historyResult}>{item.split('=')[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}