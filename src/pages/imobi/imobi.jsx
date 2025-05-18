import Copyright from "../../components/copyright/copyright";
import TopBanner from "../../components/topbanner/topBanner";
import { ImobiStyle, Container, Left, Right, Thumb, Description, Profile, ProfileImg, ProfileDescription, ProfileContact, ProfileMessage } from "./imobi-style";

function Imobi() {
    return ( 
        <div>
            <TopBanner />
            <Container>
                <ImobiStyle>
                    <Left>
                        <Thumb>
                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cozinha" />
                        </Thumb>
                        <Description>
                            <h2>Anuncie seu imóvel com a gente</h2>
                            <p>Descrição detalhada do imóvel e suas características...</p>
                        </Description>
                    </Left>
                    <Right>
                        <Profile>
                            <ProfileImg>
                                <img src="https://cdn-icons-png.flaticon.com/256/3736/3736502.png" alt="profile" />
                            </ProfileImg>
                            <ProfileDescription>
                                <h3>Mateus da Silva</h3>
                                <p>Corretor de imóveis experiente</p>
                            </ProfileDescription>
                        </Profile>
                        <ProfileContact>
                            <h3>Informações para contato</h3>
                            <p>(37) 3928-9283</p>
                            <p>mateussoftwaredeveloper9@gmail.com</p>
                        </ProfileContact>
                        <ProfileMessage>
                            <h3>Contate o anunciante</h3>
                            <form>
                                <input type="email" placeholder="E-mail" required />
                                <input type="text" placeholder="Assunto" required />
                                <textarea placeholder="Mensagem" rows="5" required></textarea>
                                <button type="submit">Enviar mensagem</button>
                            </form>
                        </ProfileMessage>
                    </Right>
                </ImobiStyle>
            </Container>
            <Copyright></Copyright>
        </div>
    );
}

export default Imobi;