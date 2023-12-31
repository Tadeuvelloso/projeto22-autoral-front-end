import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

export default function SignIn () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicado, setClicado] = useState(false);

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    
    if (clicado) {
      return;
    }
    setClicado(!clicado);

    const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


    const URL = `${BASE_URL}/signin`;
    const body = {
      email,
      password,
    };

    const promisse = axios.post(URL, body);

    promisse.then((res) => {
      console.log(res.data);
      navigate('/home');
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });
  }
    return (
    < Main>
      <Logo>
        <Logo1>CineSeries</Logo1>
        <Logo2>Sua coleção de Filmes e Series!</Logo2>
      </Logo>
      <LoginPage>
        <Formulario clicado={clicado} onSubmit={login}>
        <input type='email' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='subimit'>Log In</button>
        </Formulario>
        <Link to='/signup'>First time? Create an account!</Link>
      </LoginPage>
    </Main>
    )
}


const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  height: 1024px;
  width: 60%;
  flex-direction: column;
  display: flex;
  background-color: black;
  box-sizing: border-box;
  padding-left: 100px;
  align-items: flex-start;
  @media (max-width: 660px) {
    height: 175px;
    width: 100%;
    padding-left: 0px;
    justify-content: center;
    align-items: center;
  }
`;
const LoginPage = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  a {
    font-size: 15px;
    font-weight: 700;
    color: white;
    line-height: 17.61px;
    margin: 10px auto;
  }
  @media (max-width: 660px) {
    width: 100%;
  }
`;
const Logo1 = styled.div`
  margin-top: 25%;
  font-family: 'Passion One';
  font-size: 103px;
  font-weight: 700;
  width: 233px;
  height: 65px;
  color: white;
  @media (max-width: 660px) {
    margin-top: 0px;
    width: 210px;
    height: 60px;
    font-size: 90px;
  }
`;
const Logo2 = styled.div`
  font-family: 'Passion One';
  width: 442px;
  height: 100px;
  margin-top: 20px;
  font-size: 43px;
  color: white;
  @media (max-width: 660px) {
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    width: 230px;
    height: 70px;
  }
`;
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Oswald', sans-serif;
  margin-top: 30%;
  input {
    width: 429px;
    height: 65px;
    border-radius: 5px;
    margin: 7px auto;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    color: black;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    ::placeholder {
      font-family: 'Oswald', sans-serif;
      color: black;
      font-weight: 400;
      font-size: 20px;
    }
    @media (max-width: 660px) {
      width: 330px;
      height: 50px;
    }
  }
  button {
    font-family: 'Oswald', sans-serif;
    width: 429px;
    height: 65px;
    background-color: #1877f2;
    opacity: ${(props) => (props.clicado ? 0.2 : 1)};
    font-weight: 700;
    color: white;
    font-size: 21px;
    margin: 7px auto 15px;
    border: none;
    border-radius: 6px;

    cursor: pointer;
    @media (max-width: 660px) {
      width: 330px;
      height: 60px;
    }
  }
  @media (max-width: 660px) {
    width: 400px;
    margin-top: 30px;
  }
`;
