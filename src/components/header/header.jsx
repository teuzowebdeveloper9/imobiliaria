import { Logo, Menu, Style } from "./style";
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    return (
        <Style>
          <Logo>
             <img src="../src/assets/foto.jpg" alt="logo" />
          </Logo>
          <Menu>
            <ul>
                <li  onClick={() => navigate('/login')}>cadastro/login</li>
            </ul>
          </Menu>
            
        </Style>
        
       
     );
}

export default Header;