import React from "react";
import Header from "../../componentes/Home/Header";
import Content from "../../componentes/Home/Content";
import Footer from "../../componentes/Home/Footer";
import Aside from "../../componentes/Home/Aside";

const Home = () =>{
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
            <Aside/>
        </div>
    );
}

export default Home;