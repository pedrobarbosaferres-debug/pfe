import { Routes,Route } from "react-router-dom";

//import de paginas
import pricipal from '../pages/principal';

export default function Rotas(){
    return(
        <Routes>
            <route path='/'/> element={<principal/>}
        </Routes>
    )
}