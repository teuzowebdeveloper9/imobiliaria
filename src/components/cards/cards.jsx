import { CardStyle, Description, Img,Itens} from "./card-style";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


function Cards() {
    return ( 
        <CardStyle>
            <Img>
              <img src="https://cdn.leroymerlin.com.br/contents/quarto_de_casal_com_revestimento_de_madeira_na_parede_0908_original.jpg" alt="quarto" />
            </Img>
            <Description>
                <h4>Apartamentos</h4>
                <Itens>
                    <span>R$ 2400,00 /mês </span>
                    <span><FaMapMarkerAlt /> São  Paulo</span>
                </Itens>
                 <a href="https://github.com/teuzowebdeveloper9"> detalhes <FaLongArrowAltRight /></a>
            </Description> 
        </CardStyle>
        
     );
}

export default Cards;