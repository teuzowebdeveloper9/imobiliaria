import styled from "styled-components";

export const FooterStyle = styled.div`
  display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   border-top: 2px solid var(--gray);
   padding: 100px 100px;
   background-color: var(--white);
`

export const ItemsFooter = styled.div`
  margin-right: 5px;
  img{
    height:100px
  }
 li{
   text-decoration: none;
  padding: 12px 0;
  }
  nav{
    display: flex;
    msrgin-top: 15px;
    li{
      span{
        margin-right: 15px;
      }
    }
  }
`
