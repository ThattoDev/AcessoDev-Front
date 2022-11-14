import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-block: 20px;
    background-color: lightGray;
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
  width: 100vw;
  height: 90px;
  display: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-right: 20px;        
`;