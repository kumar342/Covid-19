import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import "./Home.css";

export default class Home extends Component {
  state = {
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
      Date: null,
    },
    country: "",
    Countries: [],
    Date: null,
    singleCountryDetails: false,
  };
  componentDidMount = () => {
    Axios.get("https://api.covid19api.com/summary")
      .then((res) => {
        this.setState({
          Countries: res.data.Countries,
          Date: res.data.Date.substring(0, 10),
        });
      })
      .catch((err) => console.log(err));
  };

  countryChanger = async (e) => {
    let country = e.target.value;
    await this.setState({ country: country });
    console.log(this.state.country);

    await this.setState({
      Country: {
        country: 0,
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
        Date: null,
      },
    });

    let singleCountryDetails;
    if (this.state.Countries) {
      this.state.Countries.forEach((res) => {
        if (country === res.Country) {
          singleCountryDetails = res;
        }
      });

      this.setState({
        Country: {
          country: singleCountryDetails.Country,
          confirmed: {
            total: singleCountryDetails.TotalConfirmed,
            new: singleCountryDetails.NewConfirmed,
          },
          recovered: {
            total: singleCountryDetails.TotalRecovered,
            new: singleCountryDetails.NewRecovered,
          },
          deaths: {
            total: singleCountryDetails.TotalDeaths,
            new: singleCountryDetails.NewDeaths,
          },
          Date: singleCountryDetails.Date,
        },
      });
      this.setState({ Country: singleCountryDetails });
    }
  };
  render() {
    return (
      <div>
        <div className="Home-img">
          <br />
          <Form.Group
            className="dropdown"
            controlId="exampleForm.ControlSelect2"
            onChange={this.countryChanger}
          >
            <Form.Control as="select" multiple>
              {this.state.Countries.map((item, i) => {
                return (
                  <option
                    className="cursor-pointer"
                    key={i}
                    value={item.Country}
                  >
                    {item.Country}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <br />
          <br />

          <div className="row">
            <div className="col-sm-4 shadow">
              <div className="card">
                <div className="bg-info">
                  <h5 className="card-title">{this.state.country} Confirmed</h5>
                  <p className="card-text">
                    Total : {this.state.Country.TotalConfirmed} <br />
                    New : {this.state.Country.NewConfirmed}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 shadow">
              <div className="card">
                <div className="bg-success">
                  <h5 className="card-title">{this.state.country} Recovered</h5>
                  <p className="card-text">
                    Total : {this.state.Country.TotalRecovered} <br />
                    New : {this.state.Country.NewRecovered}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="card">
                <div className="bg-danger">
                  <h5 className="card-title"> {this.state.country} Deaths</h5>
                  <p className="card-text">
                    Total : {this.state.Country.TotalDeaths} <br />
                    New : {this.state.Country.NewDeaths}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
