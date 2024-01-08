import styled from 'styled-components';
import {Link} from "react-router-dom";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100vh;
/*   background-color: #79a8d1; */
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: #eee;
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Button  = styled.button`
  width: 130px;
  height: 40px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    border: 1px solid #0051ff;
    color:#0051ff ;
  }
`
export const Nav = styled(Link)`
/* background-color: red; */
  width: auto;
  height: auto;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`