import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.scss'

import Home from "./pages/paginaPrincipal";

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              
         </Routes>
      </BrowserRouter>

    )

}