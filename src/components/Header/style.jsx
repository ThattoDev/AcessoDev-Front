import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-block: 20px;
  background-color: lightgrey;
`;

export const ContainerNavbar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ButtonNav = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: lightgrey;
  gap: 100px;
  cursor: pointer;

  :hover{
    background-color: lightblue;

  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 350px
  
`;

export const P = styled.p`
  width: 60px;
  height: 60px;
  background-color: red;
  color: red;
  border-radius: 50%;
  position: absolute;
  justify-content: center;
  top: -10px;
`;

export const NavBarEsquerdo = styled.div`
  Justify-content: start;
  flex-direction: row;
  gap: 100px;
  display: flex;
`;

export const NavBarDireito = styled.div`
  Justify-content: end;
  flex-direction: row;
  gap: 100px;
  display: flex;
`;