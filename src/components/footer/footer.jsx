import { FooterStyle, ItemsFooter } from "./footer-style";
import { FaInstagram, FaFacebook,FaWhatsapp } from "react-icons/fa";


function Footer() {
    return ( 
        
        <FooterStyle>
              <ItemsFooter>
               <img src="./src/assets/foto.jpg" alt="logo" />
               <p>Descubra o lar onde cada detalhe foi pensado para seu bem-estar. Da suavidade da iluminação ao aconchego dos ambientes, nossos imóveis transformam espaços em refúgios de tranquilidade. Viva a leveza de chegar em casa.</p>
                <nav>
                    <li><span><FaInstagram size={32} /></span></li>
                    <li><span><FaFacebook size={32} /></span></li>
                    <li><span><FaWhatsapp size={32} /></span></li>
                </nav>
              </ItemsFooter>
                 <ItemsFooter>
                <h3>our services</h3>
                <nav>
                    <li><span>comprar</span></li>
                    <li><span>alugar</span></li>
                    <li><span>vender</span></li>
                </nav>
              </ItemsFooter>
                 <ItemsFooter>
                <h3>our services</h3>
                <nav>
                    <li><span>comprar</span></li>
                    <li><span>alugar</span></li>
                    <li><span>vender</span></li>
                </nav>
              </ItemsFooter>
                 <ItemsFooter>
                <h3>our services</h3>
                <nav>
                    <li><span>comprar</span></li>
                    <li><span>alugar</span></li>
                    <li><span>vender</span></li>
                </nav>
              </ItemsFooter>
           
        </FooterStyle>
     );
}

export default Footer;