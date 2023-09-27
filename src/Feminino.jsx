import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/feminino.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img4 from './assets/cat-img-4.jpg';
import Img5 from './assets/product-1.jpg';
import Img6 from './assets/product-2.jpg';

function Feminino() {
  return (
    <>
      <ListGroup as="ul">
      <ListGroup.Item as="li" active className="centered-text"> FEMININO </ListGroup.Item>
      </ListGroup>

      <div className="carousel_container">
        <Carousel style={{ width: '555px', height: '333px' }}>
        <Carousel.Item>
        <img src={Img4} alt="First slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img5} alt="Second slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img6} alt="Third slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Feminino;