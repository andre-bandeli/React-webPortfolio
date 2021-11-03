import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Sobre from "./Sobre/Sobre";
import Usuario from "./Usuario/Usuario";
import Academico from "./Academico/Academico";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
           <Route component = { Academico }  path="/academico" />
       </BrowserRouter>
   )
}

export default Routes;