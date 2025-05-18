// FILEPATH: c:/Users/acer/desktop/imobiliaria/src/pages/imobi/imobi-style.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ImobiStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 65%;
  }
`;

export const Right = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Thumb = styled.div`
  width: 100%;
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  h2 {
    margin-bottom: 10px;
    color: black;
  }
  
  p {
     color: black;
    line-height: 1.6;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileDescription = styled.div`
  h3 {
    margin-bottom: 5px;
    color: black;
  }
  
  p {
    color: black;
  }
`;

export const ProfileContact = styled.div`
  margin-bottom: 20px;
  
  h3 {
    margin-bottom: 10px;
    color: black;
  }
  
  p {
    color: black;
    margin-bottom: 5px;
  }
`;

export const ProfileMessage = styled.div`
  h3 {
    margin-bottom: 15px;
    color:black;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    input, textarea {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #efefef;
      font-size: 14px;
    }
    
    textarea {
      resize: vertical;
      min-height: 100px;
    }
    
    button {
      padding: 10px;
      background-color: var(--blue);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }
`;