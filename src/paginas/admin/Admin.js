import React from "react";
import { Link } from "react-router-dom";

const Admin = () =>{
    return(
        <div style={{backgroundColor:"white"}}>
        <nav style={{backgroundColor:"#13265c", borderRadius:"20px"}} className="main-header navbar navbar-expand navbar-white navbar-light">
         <ul className="navbar-nav">
           <li className="nav-item" >
             <Link
               style={{color:"white"}}
               className="nav-link"
               data-widget="pushmenu"
               href="#"
               role="button"
             >
               <i className="fas fa-bars" />
             </Link>
           </li>
           <li className="nav-item d-none d-sm-inline-block">
             <Link to={"/Admin"} className="nav-link" style={{color:"white"}}>
               Home
             </Link>
           </li>
           <li className="nav-item d-none d-sm-inline-block">
             <Link href="#" className="nav-link" style={{color:"white"}}>
               Contact
             </Link>
           </li>
         </ul>
         <ul className="navbar-nav ml-auto">
           <li className="nav-item" >
             <Link
               style={{color:"white"}}
               className="nav-link"
               data-widget="navbar-search"
               href="#"
               role="button"
             >
               <i className="fas fa-search" />
             </Link>
             <div className="navbar-search-block">
               <form className="form-inline">
                 <div className="input-group input-group-sm">
                   <input
                     className="form-control form-control-navbar"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                   />
                   <div className="input-group-append">
                     <button className="btn btn-navbar" type="submit">
                       <i className="fas fa-search" />
                     </button>
                     <button
                       className="btn btn-navbar"
                       type="button"
                       data-widget="navbar-search"
                     >
                       <i className="fas fa-times" />
                     </button>
                   </div>
                 </div>
               </form>
             </div>
           </li>
           <li className="nav-item dropdown">
             <Link className="nav-link" data-toggle="dropdown" to={"#"}  style={{color:"white"}}>
               <i className="far fa-comments" />
               <span className="badge badge-danger navbar-badge">3</span>
             </Link>
           </li>
           {/* Notifications Dropdown Menu */}
           <li className="nav-item dropdown" >
             <Link className="nav-link" data-toggle="dropdown" href="#"  style={{color:"white"}}>
               <i className="far fa-bell" />
               <span className="badge badge-warning navbar-badge">15</span>
             </Link>
             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
               <span className="dropdown-item dropdown-header">
                 15 Notifications
               </span>
               <div className="dropdown-divider" />
               <a href="#" className="dropdown-item">
                 <i className="fas fa-envelope mr-2" /> 4 new messages
                 <span className="float-right text-muted text-sm">3 mins</span>
               </a>
               <div className="dropdown-divider" />
               <a href="#" className="dropdown-item">
                 <i className="fas fa-users mr-2" /> 8 friend requests
                 <span className="float-right text-muted text-sm">12 hours</span>
               </a>
               <div className="dropdown-divider" />
               <a href="#" className="dropdown-item">
                 <i className="fas fa-file mr-2" /> 3 new reports
                 <span className="float-right text-muted text-sm">2 days</span>
               </a>
               <div className="dropdown-divider" />
               <a href="#" className="dropdown-item dropdown-footer">
                 See All Notifications
               </a>
             </div>
           </li>
         </ul>
       </nav>
       <aside style={{backgroundColor:"#13265c", borderRadius:"20px"}} className="main-sidebar sidebar-dark-primary elevation-4">
         {/* Brand Logo */}
         <Link to={"#"} className="brand-link">
           <img
             src="dist/img/s.png"
             alt="AdminLTE Logo"
             className="brand-image img-circle elevation-3"
             style={{ opacity: ".8" }}
           />
           <span style={{Color:"white"}} className="brand-text font-weight-light">ServiPlus</span>
         </Link>
         {/* Sidebar */}
         <div className="sidebar">
           {/* Sidebar user panel (optional) */}
           <div className="user-panel mt-3 pb-3 mb-3 d-flex">
             <div className="image">
               <img
                 src="dist/img/luffy.jpg"
                 className="img-circle elevation-2"
                 alt="User Image"
               />
             </div>
             <div style={{Color:"white"}} className="info">
               <Link to={"/profile"} className="d-block">
                 Johan Muñoz
               </Link>
             </div>
           </div>
           {/* SidebarSearch Form */}
           <div className="form-inline">
             <div className="input-group" data-widget="sidebar-search">
               <input
                 style={{backgroundColor:"#DCEFFB",color: "black", borderColor: "white", borderRadius:"20px"}}
                 className="form-control form-control-sidebar"
                 type="search"
                 placeholder="Search"
                 aria-label="Search"
               />
               <div className="input-group-append">
                 <button className="btn btn-sidebar"  style={{borderRadius:"20px", marginLeft:"10px", backgroundColor:"#DCEFFB", color:"#13265c"}}>
                   <i className="fas fa-search fa-fw" />
                 </button>
               </div>
             </div>
           </div>
           {/* Sidebar Menu */}
           <nav className="mt-2">
             <ul
               className="nav nav-pills nav-sidebar flex-column"
               data-widget="treeview"
               role="menu"
               data-accordion="false"
             >
               {/* Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library */}
  
               <li className="nav-item">
                 <Link to={"/Home"} className="nav-link">
                   <i className="nav-icon fas fa-th" />
                   <p>Bienvenido</p>
                 </Link>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="nav-icon fas fa-copy" />
                   <p>
                     Atencion al cliente
                     <i className="fas fa-angle-left right" />
                     <span className="badge badge-info right">6</span>
                   </p>
                 </a>
                 <ul className="nav nav-treeview">
                   <li className="nav-item">
                     <Link to={"/crearsolicitud"} className="nav-link">
                       <i className="far fa-circle nav-icon" />
                       <p>Crear Ticket</p>
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link
                       to={"/ConsultarTicket"}
                       className="nav-link"
                     >
                       <i className="far fa-circle nav-icon" />
                       <p>Consultar Ticket</p>
                     </Link>
                   </li>
                   <li className="nav-item">
                     <a href="pages/layout/boxed.html" className="nav-link">
                       <i className="far fa-circle nav-icon" />
                       <p>Editar Ticket</p>
                     </a>
                   </li>
                   <li className="nav-item">
                     <a
                       href="pages/layout/fixed-sidebar.html"
                       className="nav-link"
                     >
                       <i className="far fa-circle nav-icon" />
                       <p>Eliminar Ticket</p>
                     </a>
                   </li>
                 </ul>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="nav-icon fas fa-chart-pie" />
                   <p>
                     Chat
                     <i className="right fas fa-angle-left" />
                   </p>
                 </a>
                 <ul className="nav nav-treeview">
                   <li className="nav-item">
                     <a href="pages/charts/chartjs.html" className="nav-link">
                       <i className="far fa-circle nav-icon" />
                       <p>Cliente</p>
                     </a>
                   </li>
                   <li className="nav-item">
                     <a href="pages/charts/flot.html" className="nav-link">
                       <i className="far fa-circle nav-icon" />
                       <p>Empleado</p>
                     </a>
                   </li>
                 </ul>
               </li>
             </ul>
           </nav>
           {/* /.sidebar-menu */}
         </div>
         {/* /.sidebar */}
       </aside>
       <div style={{backgroundColor:"white",paddingLeft:"450px", paddingTop:"20px", paddingBottom:"20px", borderRadius:"20px", marginLeft:"255px", marginRight:"5px", marginBottom:"5px", marginTop:"5px"}}  className="content-wrapper">
         <section className="content-header">
           <div  className="container-fluid">
             <div className="row mb-2">
               <div className="col-sm-6">
                
               </div>
               <div className="col-sm-6">
                 <ol className="breadcrumb float-sm-right">
                   <li className="breadcrumb-item">
                     <Link to={"/Home"}>Home</Link>
                   </li>
                   <li className="breadcrumb-item active">Crear Ticket</li>
                 </ol>
               </div>
             </div>
           </div>
           {/* /.container-fluid */}
         </section>
         {/* Main content */}
         <section className="content">
        
         </section>
         
         {/* /.content */}
       </div>
       <footer className="main-footer">
         <strong>
           Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
         </strong>
         All rights reserved.
         <div className="float-right d-none d-sm-inline-block">
           <b>Version</b> 3.2.0
         </div>
       </footer>
     </div>
    );
}

export default Admin;