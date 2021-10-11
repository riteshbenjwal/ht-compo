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

import Productimg from "./productimg.jpg";

const AddProduct = () => {
  return (
    <>
      <Container className="wrapper">
        <h1 className="title my-4">Add Products</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              placeholder="Enter Product Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBrand">
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control className="input-field" as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="warning">Warning</Button>
      </Container>
    </>
  );
};

export default AddProduct;
