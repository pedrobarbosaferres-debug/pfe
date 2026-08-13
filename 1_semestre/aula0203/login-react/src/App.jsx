
import './App.css';
import logsesi from './assets/img/logosesi.jpg'
import logsenai from './assets/img/logosenai.png'

export default function App() {

  return (
    <div className="container">
      <img src={logsesi} alt="logo do sesi"className='logo' />
      <img src={logsenai} alt="logo do senai"className='logo' />
      <h1 className='titulo'>login</h1>
      <span className='subtutlo'>para continuar</span>
      <label htmlFor="nome" className='label'>nome</label>
      <input type="text" className='campo' id='nome' placeholder='seu nome'/>
      <label htmlFor="senha" className='label'>senha</label>
      <input type="text" className='campo' id='senha' placeholder='***' />
      <button className='botao'>log in</button>
      <a className="textofooter">esqueceu senha</a>
      <a className="textofooter">cadastrar</a>
    </div>

  )
}

//export default App
