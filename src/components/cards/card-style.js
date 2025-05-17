import styled from "styled-components";

export const CardStyle = styled.div`
   width: 24%;
   border: 1px solid black;
   box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2)
   

`

export const Img = styled.div`
   img{
    width:100%;
    height: 150px;
   }
`

export const Description = styled.div`
 padding: 10px;
 a{
  display: flex;
   justify-content: space-between;
   align-items: center;
   color: var(--color-secondary);
 }
 h4{
   font-size: 0.8rem;
   font-weight: 600;
   margin-bottom: 5px;
 }

`

export const Itens = styled.div`
 display:flex;
 justify-content: flex-start;
 flex-direction: column;

`
