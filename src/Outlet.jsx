import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/outlet.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img10 from './assets/product-6.jpg';
import Img11 from './assets/product-7.jpg';
import Img12 from './assets/product-8.jpg';

function Outlet() {
  return (
    <>
      <ListGroup as="ul">
      <ListGroup.Item as="li" active className="centered-text"> OUTLET </ListGroup.Item>
      </ListGroup>

      <div className="carousel_container">
        <Carousel style={{ width: '555px', height: '333px' }}>
        <Carousel.Item>
        <img src={Img10} alt="First slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img11} alt="Second slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img12} alt="Third slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Outlet;