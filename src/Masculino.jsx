import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/masculino.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img7 from './assets/product-3.jpg';
import Img8 from './assets/product-4.jpg';
import Img9 from './assets/product-5.jpg';

function Masculino() {
  return (
    <>
      <ListGroup as="ul">
      <ListGroup.Item as="li" active className="centered-text"> MASCULINO </ListGroup.Item>
      </ListGroup>

      <div className="carousel_container">
        <Carousel style={{ width: '555px', height: '333px' }}>
        <Carousel.Item>
        <img src={Img7} alt="First slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img8} alt="Second slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img9} alt="Third slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Masculino;