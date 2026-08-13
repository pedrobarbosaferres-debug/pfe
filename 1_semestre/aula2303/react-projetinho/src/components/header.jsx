import { useContext} from "react";
import { ContextoTema } from '../context/temaContexto';

export default function Header(){
    const {tema, mudarTema} = useContext(ContextoTema);

    return(
        <header className={`header-${tema}`}>
            <h1>Meu primeiro site com tema de Contexto</h1>
            
            <img src="https://rockmezz.com.br/wp-content/uploads/2016/11/tela_pintura_guns_n_roses_rtpt_125.jpg" alt="" />
            <br />
            <img src="https://m.media-amazon.com/images/S/pv-target-images/fddfecb15cf49b6c9016754d64aed10e0e6a1f0c9e71bcfbc1c923c2370b2f3a._SX1080_FMjpg_.jpg" alt="" />
            <br />
            <img src="https://i0.wp.com/blog.bileskydiscos.com.br/wp-content/uploads/2016/03/LedZeppelin.jpg?fit=480%2C360&ssl=1" alt="" />
            <button onClick={mudarTema}>
                Mudar tema para {tema === 'light' ? 'escuro':'claro'}
            </button>
        </header>
    )
}