import styled from "@emotion/styled/macro";
import { mobile, mobileLandscape, tablets } from "../responsive";
import { register } from "../redux/apiCalls";
import { useState } from "react";
import { useDispatch } from 'react-redux'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      left;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${tablets({ width: "35%" })}
  ${mobileLandscape({ width: "50%" })}
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREER UN COMPTE</Title>
        <Form>
          <Input
            type="text"
            placeholder="nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Agreement>
            En créant ce compte , j'accepte les conditions générales
          </Agreement>
          <Button onClick={handleClick} >CREER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
