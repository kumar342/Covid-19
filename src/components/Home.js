import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";

export default class Home extends Component {
  state = {
    data: [],
    global: {
      confirmed: {
        total: 0,
        new: 0,
      },
      recovered: {
        total: 0,
        new: 0,
      },
      deaths: {
        total: 0,
        new: 0,
      },
    },
    Country: {
      confirmed: {
        total: 0,
        new: 0,
      },
      recovered: {
        total: 0,
        new: 0,
      },
      deaths: {
        total: 0,
        new: 0,
      },
    },
    Countries: [],
    Date: null,
  };
  componentDidMount = () => {
    Axios.get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res);

        this.setState({
          global: {
            confirmed: {
              total: res.data.Global.TotalConfirmed,
              new: res.data.Global.NewConfirmed,
            },
            recovered: {
              total: res.data.Global.TotalRecovered,
              new: res.data.Global.NewConfirmed,
            },
            deaths: {
              total: res.data.Global.TotalDeaths,
              new: res.data.Global.NewDeaths,
            },
          },
          Countries: res.data.Countries,
          Date: res.data.Date.substring(0, 10),
        });
        console.log(this.state.global);

        console.log(this.state.Date);
        console.log(this.state.Countries);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="select">
        <h1> Covid-19</h1>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Control as="select" multiple>
            <option>Global</option>
            {this.state.Countries.map((item, i) => {
              return (
                <option key={i} value={item.Country}>
                  {item.Country}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}
