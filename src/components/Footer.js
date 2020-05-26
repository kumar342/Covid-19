import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <center>
        <div className="d-flex flex-column">
          <footer className="footer">
            <div className="ml-auto">
              <h1>Developed by</h1> <span> </span>
              <a href="https://github.com/kumar342/Covid-19">Hemanth Kumar</a>
            </div>
          </footer>
        </div>
      </center>
    );
  }
}
