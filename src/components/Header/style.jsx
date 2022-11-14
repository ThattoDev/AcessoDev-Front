import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-block: 20px;
    background-color: lightGray;
`;

export const logo = styled.image`
  url
`

export const ContainerLogo = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export const ContainerNavbar = styled.div`
  display: none;
  position: fixed;
  z-index: 4;
  @media (min-width: 1024px){
    display: block;
  }
`;

export const NavbarTopDiv = styled.div`
  width: 100%;
  height: 90px;
  display: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  margin: auto;
  list-style: none;  
`;

export const NavBarDireito = styled.div`
  Justify-content: flex-end;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const NavBarEsquerdo = styled.div`
  Justify-content: start;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;