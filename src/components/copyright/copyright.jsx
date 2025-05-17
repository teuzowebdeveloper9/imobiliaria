import { CopyrightWrapper } from './copyright-style';

function Copyright() {
    const currentYear = new Date().getFullYear();
    
    return (
        <CopyrightWrapper>
            <p>&copy; {currentYear} Imobiliária react. Todos os direitos reservados.</p>
        </CopyrightWrapper>
    );
}

export default Copyright;