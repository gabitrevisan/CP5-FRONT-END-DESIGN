import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/casual.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from './assets/cat-img-1.jpg';
import Img2 from './assets/cat-img-2.jpg';
import Img3 from './assets/cat-img-3.jpg';

function Casual() {
  return (
    <>
      <ListGroup as="ul">
      <ListGroup.Item as="li" active className="centered-text"> CASUAL </ListGroup.Item>
      </ListGroup>

      <div className="carousel_container">
        <Carousel style={{ width: '555px', height: '333px' }}>
        <Carousel.Item>
        <img src={Img1} alt="First slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img2} alt="Second slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img3} alt="Third slide" style={{ width: '555px', height: '333px' }}/>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Casual;