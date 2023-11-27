import React, { Fragment, Profiler } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // componentes de ruteo
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/CrearCuenta";
import Home from "./paginas/usuario/Home";
import CrearSolicitud from "./paginas/usuario/CrearTicket";
import Profile from "./paginas/usuario/Home";
import CrearCuentaAdmin from "./paginas/auth/CrearCuentaAdmin";
import ConsultarTicket from "./paginas/usuario/ConsultarTicket";
import Admin from "./paginas/admin/Admin";
import EditarTicket from "./paginas/usuario/EditarTicket";



function App() {


  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Crear-Cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/crearsolicitud" exact element={<CrearSolicitud/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
          <Route path="/CrearCuentaAdmin" exact element={<CrearCuentaAdmin/>}/>
          <Route path="/ConsultarTicket" exact element={<ConsultarTicket/>}/>
          <Route path="/Admin" exact element={<Admin/>}/>
          <Route path="/EditarTicket" exact element={<EditarTicket/>}/>
          

        </Routes>
      </Router>
    </Fragment>
  );
}


export default App;
