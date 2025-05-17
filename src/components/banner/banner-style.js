import styled from "styled-components";

export const BannerStyle = styled.div`
  padding: 200px 150px;
  background-color: transparent;
  color: black;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
`

export const Text = styled.div`
 h2{
  margin-bottom: 20px;
 }
 p{
   
   margin-bottom: 18px;
  } 
  span{
     color: var(--white);
     padding: 8px;
     border: 1px solid var(--blue);
     background-color: var(--blue);
     border-radius: 5px;
     width: 100px;

  } 
   span:hover{
      cursor: pointer;
   }      
`