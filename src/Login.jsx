import "bootstrap/dist/css/bootstrap.min.css";
import "./css/login.css";
import {useRef} from 'react'
import Home from './Home';
import ListGroup from "react-bootstrap/ListGroup";

function Login(){

/*Hook- useRef - retorna um elemento ou componentte no DOM */
const usuario =useRef();
const senha = useRef();

/*criando a estrutura do sessionStorage para os dados digitados */
const getUser = sessionStorage.getItem('userData');
const getSenha = sessionStorage.getItem('userSenha');

/*criando as funções */

const handleSubmit =()=>{
    if(usuario.current.value ==='gabi' && senha.current.value ==='1234567')
    {
        sessionStorage.setItem('userData','gabi');
        sessionStorage.setItem('userSenha','1234567');

    } else{
        alert("Usuário e/ou senha inválidos")
    }
};

    return (
        <>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active className="centered-text">
            LOGIN
            </ListGroup.Item>
        </ListGroup>

        {getUser && getSenha ? (
            <Home />
        ) : (
            <form onSubmit={handleSubmit} className="login-form">
            <div className="label-input-container">
                <label htmlFor="usuario" className="form-label">Usuário:</label>
                <input type="text" className="form-control" id="usuario" ref={usuario} />
            </div>

            <div className="label-input-container">
                <label htmlFor="senha" className="form-label">Senha:</label>
                <input type="password" className="form-control" id="senha" ref={senha} />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
</form>
        )}
        </>
    );
    }

export default Login;