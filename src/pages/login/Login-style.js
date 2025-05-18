import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
`;

export const LoginBox = styled.div`
    display: flex;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 1000px;
    height: 600px;
`;

export const ImageBox = styled.div`
    img{
       width:100%;
      height: 600px;
    }
    flex: 1;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const FormBox = styled.div`
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    background: #4facfe;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #00f2fe;
    }`;