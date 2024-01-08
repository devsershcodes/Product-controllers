import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  
`;

export const ContentAdd = styled.div`
  margin-top: 10px;
  width: 100%;
  height: auto;
  /* background-color: blue; */
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

export const ContentInput = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: "Outfit";

  &::placeholder {
    font-size: 15px;
  }
  &.file{
    padding: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #125bda;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0f4094;
  }

`;
