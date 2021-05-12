import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.hennessy.com/sites/hennessy/files/2020-01/HEADER_COCKTAIL_2880x1540.jpg"
          alt="First slide"
          height="700px"
        />
        <Carousel.Caption>
          <h3>The best App for Cocktails recepies</h3>
          <p>Choose the drink and follow the steps</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1598990386084-8af4dd12b3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Second slide"
          height="700px"
        />
        <Carousel.Caption>
          <h3>Any question?</h3>
          <Button variant="danger">Contact us</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
