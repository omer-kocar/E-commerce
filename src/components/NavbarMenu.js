import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AiOutlineDingding,
  AiOutlineShoppingCart,
  AiOutlineLogin,
} from "react-icons/ai/";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {BsBag} from 'react-icons/bs/';
import { Link } from "react-router-dom";
import {CardContext} from '../context/Context';

function NavbarMenu() {


  return (
    <div>
      <Navbar bg="dark" expand="sm">
        <Container fluid>
          <div className="container d-flex">
            <Link to="/" className="text-decoration-none">
              {" "}
              <Navbar.Brand className=" h1 ">
                {" "}
                <AiOutlineDingding className="h1 text-light" />{" "}
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end text-decoration-none">
              <Nav
                className="me-auto w-100 d-flex justify-content-center "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form className="d-flex w-75">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2  "
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
              <Nav.Link className="d-flex align-items-center text-light">
                  <BsBag className=" me-2 text-danger"/>
                Siparişlerim
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center text-light">
                {" "}
                <AiOutlineLogin className=" me-2 text-danger " />
                Login
              </Nav.Link>
              <CardContext.Consumer>
              {(item) => (
              <Nav.Link  onClick={item.setShowCanvas} className="d-flex align-items-center border border-danger rounded bg-danger text-light">
                {" "}
                <AiOutlineShoppingCart className=" me-2 text-light   " />{" "}
                Sepetim
              </Nav.Link>
              )}
              </CardContext.Consumer>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
