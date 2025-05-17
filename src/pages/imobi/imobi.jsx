import TopBanner from "../../components/topbanner/topBanner";
import { ImobiStyle, Left, Right, Thumb } from "./imobi-style";

function Imobi() {
    return ( 
        <div>
            <TopBanner></TopBanner>
            <ImobiStyle>
                <Left>
                   <Thumb>
                       <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cozinha" />
                   </Thumb>
                </Left>
                <Right>

                </Right>
            </ImobiStyle>
            
        </div>
     );
}

export default Imobi;