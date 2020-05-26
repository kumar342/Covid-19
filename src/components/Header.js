import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

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
          <Nav.Link href="https://medium.com/@hemanth2gundala/coronavirus-covid-19-ddc9d38c7c9e">
            About Covid-19
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
