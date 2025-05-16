import styled from "styled-components";

export const Style = styled.div`
  padding: 25px 125px;
  height: 76px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  background-color: var(--white);
`;


export const Logo = styled.div`
  display: flex;
  img{
    height:50px
  }

`

export const Menu = styled.div`
  
  border: 1px solid var(--gray);
  padding: 5px;
  color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  background-color: white;
  ul li{
   background: white;
   color: var(--color-secondary);
  }
   ul li:hover{
    background-color: var(--gray);
    cursor: pointer;
     color: var(--color-secondary);
   }
  &:hover{
    background-color: var(--gray);
    cursor: pointer;
     color: var(--color-secondary);
 }
`