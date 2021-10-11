import React from "react";
import "./AddProduct.css";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";


const AddProduct = () => {
  return (
    <>
      <Container className="wrapper">
        <h1 className="title my-4">Add Products</h1>

        <Form>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              placeholder="Enter Product Name"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicBrand">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              placeholder="Enter Product Brand"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control className="input-field" type="file" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control className="input-field" as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <Button variant="warning">Add Product</Button>
      </Container>
    </>
  );
};

export default AddProduct;


/* 

Sample Add Products

1. We can again make a sub Form Component and pass className, type as Props to make code look small.

2. Color, Fonts, Font-size, Width and other UI things can be changed according to the Place where we have to put this component.


*/