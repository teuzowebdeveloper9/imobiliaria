import styled from "styled-components";

export const TopBannerStyle = styled.div`
  padding: 50px 20px;
  position: relative;
  color: white;
  background-size: cover;
  background-position: center;
  background-image: url(https://pachecos.com/wp-content/uploads/Quarto-de-Casal-com-Toucador-e-Espelho-e-Candeeiros-em-Dourado-Pachecos-Mobiliario-1.jpg);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(37, 35, 35, 0.6);
    z-index: 1;
  }

  @media (min-width: 768px) {
    padding: 50px 150px;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

export const Title = styled.h2`
  color: var(--white, #ffffff);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: var(--white, #ffffff);
  font-size: 1rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;