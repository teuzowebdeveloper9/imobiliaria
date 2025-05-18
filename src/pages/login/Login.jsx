import { LoginContainer, LoginBox, ImageBox, FormBox, Input, Button } from './Login-style';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <LoginContainer>
            <LoginBox>
                <ImageBox>
                   <img src="https://amaisd.com.br/wp-content/themes/theme/blog_images/quarto1_2.jpg" alt="login image" />
                </ImageBox>
                <FormBox>
                    <h2>Login</h2>
                    <Input type="text" placeholder="usuario" />
                    <Input type="password" placeholder="senha" />
                    <Button onClick={() => navigate('/home')}>faça seu login</Button>
                </FormBox>
            </LoginBox>
        </LoginContainer>
    );
}

export default Login;