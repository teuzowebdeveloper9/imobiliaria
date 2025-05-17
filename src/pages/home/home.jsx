import Cards from "../../components/cards/cards";
import { HomeStyle, Wrapper } from "./home-style";

function Home() {
    return ( 
        <header>
            <HomeStyle>
                 <h2>O lugar dos seus sonhos está mais perto do que você imagina</h2>
            </HomeStyle>
            <Wrapper>
                 <Cards></Cards>
            </Wrapper>
        </header>
     );
}

export default Home;