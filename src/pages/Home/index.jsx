// import { Header } from "../../components/Header/style";
import React from "react";
import { ContainerLogo, 
    ContainerNavbar, 
    Header, 
    NavbarTopDiv, 
    NavBarEsquerdo, 
    NavBarDireito } from "../../components/Header/style";
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
                        <NavBarEsquerdo>
                            <li>HOME</li>
                            <li>PORTFÓLIO</li>
                        </NavBarEsquerdo>
                        <ContainerLogo>
                        <div className="d-flex justify-content-between"><img src={LogoNavBar} alt="logo Do Site"/></div>
                        </ContainerLogo>
                        <NavBarDireito>
                            <li>SOBRE</li>
                            <li>LOGIN</li>
                        </NavBarDireito>
                    </NavbarTopDiv>
                </ContainerNavbar>
            </Header>
            <h1>HOME</h1>
        
        </>
    )
}
