import Cards from "../../components/cards/cards";
import { HomeStyle, Wrapper } from "./home-style";

function Home() {
    let cards = [];
    for (let i = 0; i < 4 ; i++){
        cards.push( <Cards key={i}></Cards>)
    }
    return ( 
        <header>
            <HomeStyle>
                 <h2>O lugar dos seus sonhos está mais perto do que você imagina</h2>
            </HomeStyle>
            <Wrapper>
                 {cards}
            </Wrapper>
        </header>
     );
}

export default Home;