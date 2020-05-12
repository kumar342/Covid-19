import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
