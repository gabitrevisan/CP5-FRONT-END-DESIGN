import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import "./css/carrinho.css";
import ListGroup from "react-bootstrap/ListGroup";
import Carrinhos from './assets/carrinho.jpg';

function Carrinho() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="carrinho-container">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="centered-text">
          CARRINHO
        </ListGroup.Item>
      </ListGroup>

      <div className="content">
        <img src={Carrinhos} alt="Carrinho de compras" className="carrinho-image" />

        <div className="carrinho-content">
          <p className="total-text">Total de itens adicionados: {contador}</p>
          
          <button className="button" onClick={incrementar}>
            Adicionar
          </button>
          <button className="button" onClick={decrementar}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;