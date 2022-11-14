// import { Header } from "../../components/Header/style";
import React from "react";
import { Header } from "../../components/Header/style";
// import { useNavigate } from "react-router-dom";

export const Home = () => {

    // let navigate = useNavigate();

    // const irParaHome = () => {
    //     navigate('../pages/Home')
    // }
    
    return(
        <>
            <Header>
                    <ol>
                        <li>HOME</li>
                        <li>PORTFÓLIO</li>
                        <li>SOBRE</li>
                        <li>LOGIN</li>
                    </ol>
            </Header>
            <h1>HOME</h1>
        
        </>
    )
}
