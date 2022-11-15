import {Header} from '../Header/style';
import { useNavigate } from 'react-router-dom';

export const Cabecalho = () => {

    let navigate = useNavigate();

    const irParaHome = () => {
        navigate('../pages/Home')
    }

    return (
        
        <Header>
            <ol>
                <li onClick={irParaHome}>HOME</li>
                <li>PORTFÓLIO</li>
                <li>SOBRE</li>
                <li>LOGIN</li>
            </ol>
        </Header>
        
    );
}