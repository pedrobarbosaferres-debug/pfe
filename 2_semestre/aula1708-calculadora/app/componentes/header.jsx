export default function Header() {
    return (
       <header style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
           padding: '1.25rem 2rem',
           width: '100%',
           maxWidth: '1200px',
           margin: '0 auto',
           borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
       }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ff9500, #2563eb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(255, 149, 0, 0.3)'
            }}>
                🧮
            </div>
            <h1 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                background: 'linear-gradient(180deg, #ffffff 0%, #9ca3af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Calculadora
            </h1>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#00ff88'
        }}>
            <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#00ff88',
                boxShadow: '0 0 8px #00ff88'
            }}></span>
            ONLINE • SENAI P.F.E
        </div>
       </header> 
    )
};