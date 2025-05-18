import { BannerStyle,Text } from "./banner-style";
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

    return (
        <div>
           <BannerStyle>
              <Text>
                  <h2>Encontre o lar dos seus sonhos com<br></br> conforto e segurança.</h2>
                  <p>Conectamos você ao lugar ideal para viver momentos inesquecíveis.</p>
                  <span onClick={() => navigate('/anuncios')}>cadastre seu anuncios</span>
              </Text>
            
           </BannerStyle>
                  
             
           
        </div>
        
      );
}

export default Banner;