import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class Header extends Component {
  state = {
    CovidImg: "🦠",
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          C{this.state.CovidImg}vid-19 Tracking System
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">About Covid-19</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
