import { Logo, Menu, Style } from "./style";
import { useNavigate } from "react-router-dom";
import imagelogo from '../../assets/foto.jpg'


function Header() {
    const navigate = useNavigate();
    return (
        <Style>
          <Logo>
             <img src={imagelogo} alt="logo" />
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