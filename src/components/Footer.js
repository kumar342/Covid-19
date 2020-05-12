import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <center>
        <div className="d-flex flex-column">
          <footer className="footer">
            <div>
              <a href="https://coreui.io">CoreUI</a>
              <span>&copy; 2020 creativeLabs.</span>
            </div>
            <div className="ml-auto">
              <span>Developed by</span> <span> </span>
              <a href="https://github.com/kumar342/Covid-19">Hemanth Kumar</a>
            </div>
          </footer>
        </div>
      </center>
    );
  }
}
