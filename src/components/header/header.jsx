import { Logo, Menu, Style } from "./style";


function Header() {
    return (
        <Style>
          <Logo>
             <img src="./src/assets/foto.jpg" alt="logo" />
          </Logo>
          <Menu>
            <ul>
                <li>cadastro/login</li>
            </ul>
          </Menu>
            
        </Style>
        
       
     );
}

export default Header;