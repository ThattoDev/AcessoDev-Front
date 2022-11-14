// import { Header } from "../../components/Header/style";
import React from "react";
import { ContainerNavbar, Header, NavbarTopDiv } from "../../components/Header/style";
// import { useNavigate } from "react-router-dom";

export const Home = () => {

    // let navigate = useNavigate();

    // const irParaHome = () => {
    //     navigate('../pages/Home')
    // }
    
    return(
        <>
            <Header>
                <ContainerNavbar>
                    <NavbarTopDiv>
                        <li>HOME</li>
                        <li>PORTFÓLIO</li>                        
                        <img src="" alt="logo Do Site" />
                        <li>SOBRE</li>
                        <li>LOGIN</li>
                    </NavbarTopDiv>
                </ContainerNavbar>
            </Header>
            <h1>HOME</h1>
        
        </>
    )
}
