import Cards from "../../components/cards/cards";
import { HomeStyle, Wrapper } from "./home-style";
import Header from "../../components/header/header"
import Banner from "../../components/banner/banner";
import Copyright from "../../components/copyright/copyright";


function Home() {
    let cards = [];
    for (let i = 0; i < 4 ; i++){
        cards.push( <Cards key={i}></Cards>)
    }
    return ( 
        <header>
            <Header></Header>
            <Banner></Banner>
            <HomeStyle>
                 <h2>O lugar dos seus sonhos está mais perto do que você imagina</h2>
            </HomeStyle>
            <Wrapper>
                 {cards}
            </Wrapper>
            <Copyright></Copyright>
        </header>
     );
}

export default Home;