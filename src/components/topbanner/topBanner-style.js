import styled from "styled-components";

export const TopBannerStyle = styled.div`
 padding: 50px 150px;
 position: relative;
 color: white;
 background-size: cover;
 background-position: center;
 background-image: url(https://pachecos.com/wp-content/uploads/Quarto-de-Casal-com-Toucador-e-Espelho-e-Candeeiros-em-Dourado-Pachecos-Mobiliario-1.jpg);
 :before{
    background-color: rgba(37, 35, 35, 0.6);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
   top: 0;
   left: 0;
   z-index: 1;
 }
`

export const Text = styled.div`
 p h2 {
  color: var(--white);
 }
`