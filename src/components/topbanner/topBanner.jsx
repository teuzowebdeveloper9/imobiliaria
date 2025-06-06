import { TopBannerStyle, TextWrapper, Title, Description } from "./topBanner-style";

function TopBanner() {
    return (
        <TopBannerStyle>
            <TextWrapper>
                <Title>Apartamentos</Title>
                <Description>
                    Anuncie seu imóvel no nosso site e tenha visibilidade máxima! Com ferramentas inteligentes e um design moderno, garantimos que seu anúncio chegue aos compradores e inquilinos certos. Fotos profissionais, descrições detalhadas e recursos exclusivos como tour virtual ajudam a vender ou alugar mais rápido. Destaque-se no mercado e feche negócios com quem realmente está interessado!
                </Description>
            </TextWrapper>
        </TopBannerStyle>
    );
}

export default TopBanner;