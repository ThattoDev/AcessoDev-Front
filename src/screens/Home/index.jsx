// import { Header } from "../../components/Header/style";
import React from "react";
import { ContainerLogo, 
    ContainerNavbar, 
    Header, 
    NavBarEsquerdo, 
    NavBarDireito,
    ButtonNav, 
    P} from "../../components/Header/style";
    // import logoCentral from "../../assets/691.png"
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
                    <NavBarEsquerdo>
                        <ButtonNav>HOME</ButtonNav>
                        <ButtonNav>PORTIFÓLIO</ButtonNav>
                    </NavBarEsquerdo>
                    <ContainerLogo className="d-flex justify-content-between">
                            <P>oi</P>
                    </ContainerLogo>
                    <NavBarDireito>
                        <ButtonNav>SOBRE</ButtonNav>
                        <ButtonNav>LOGIN</ButtonNav>
                    </NavBarDireito>
                </ContainerNavbar>
            </Header>
            <h1>HOME</h1>
            
        
        </>
    )
}
